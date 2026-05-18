import Database from 'better-sqlite3';
import { readdirSync, readFileSync, existsSync, unlinkSync, statSync } from 'fs';
import { join } from 'path';
import { applySchemaMigrations } from '../src/database/apply-schema-migrations';

// ---------------------------------------------------------------------------
// Types for the expected-grupaN.json spec
// ---------------------------------------------------------------------------

interface QueryAssert {
  /** Expected column names (structural check only). */
  columns?: string[];
  /** Exact row set (order-sensitive unless `unordered` is true). */
  rows?: Record<string, unknown>[] | null;
  /** Only check the number of returned rows. */
  rowCount?: number | null;
  /**
   * If true, compare rows as sets (sorted by JSON-serialised value)
   * instead of ordered arrays.
   */
  unordered?: boolean;
  /**
   * A verification query to run *after* the student's statement.
   * Useful for UPDATE / DELETE where there is no result set.
   */
  customSql?: string;
}

interface QuerySpec {
  description: string;
  assert: QueryAssert;
}

interface ExpectedFile {
  queries: [QuerySpec, QuerySpec];
  /** Per-student overrides keyed by folder name. */
  students?: Record<string, { queries?: [QuerySpec?, QuerySpec?] }>;
}

// ---------------------------------------------------------------------------
// Paths — driven by GRUPA env var
// ---------------------------------------------------------------------------

const GRUPA = process.env.GRUPA;
if (!GRUPA) {
  throw new Error(
    'Environment variable GRUPA is required. Run with: GRUPA=grupa1 npm run exam:grade',
  );
}

const ROOT = join(__dirname, '..');
const EXAM_DIR = join(ROOT, 'exam', GRUPA);
const GRADING_FILE = join(ROOT, 'exam', '.grading', `expected-${GRUPA}.json`);
const MIGRATIONS_DIR = join(ROOT, 'db');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadExpected(): ExpectedFile {
  if (!existsSync(GRADING_FILE)) {
    throw new Error(`Grading file not found: ${GRADING_FILE}`);
  }
  return JSON.parse(readFileSync(GRADING_FILE, 'utf-8'));
}

function getStudentDirs(): string[] {
  if (!existsSync(EXAM_DIR)) return [];
  return readdirSync(EXAM_DIR)
    .filter((name) => {
      if (name.startsWith('.')) return false;
      return statSync(join(EXAM_DIR, name)).isDirectory();
    })
    .sort();
}

const QUERY_MARKER = /^--\s*@exam:query\s+(\d+)/m;

/**
 * Split `interogari.sql` into individual statements using
 * `-- @exam:query N` markers. Falls back to a naive semicolon split
 * if no markers are found.
 */
function splitQueries(raw: string): string[] {
  const parts: string[] = [];
  const lines = raw.split('\n');
  let current: string[] = [];
  let started = false;

  for (const line of lines) {
    if (QUERY_MARKER.test(line)) {
      if (started && current.length) {
        parts.push(current.join('\n').trim());
      }
      current = [];
      started = true;
      continue;
    }
    if (started) current.push(line);
  }
  if (current.length) parts.push(current.join('\n').trim());

  if (parts.length >= 2) return parts.slice(0, 2);

  const statements = raw
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && !s.startsWith('--'));
  return statements.slice(0, 2);
}

/**
 * Normalise a row object so that numeric-looking strings become numbers,
 * making comparisons between e.g. `1` and `"1"` less brittle.
 */
function normaliseRow(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    if (typeof v === 'string' && /^-?\d+(\.\d+)?$/.test(v)) {
      out[k] = Number(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function sortRows(rows: Record<string, unknown>[]): Record<string, unknown>[] {
  return [...rows].sort((a, b) =>
    JSON.stringify(a) < JSON.stringify(b) ? -1 : 1,
  );
}

function resolveQuerySpec(
  expected: ExpectedFile,
  studentId: string,
  queryIndex: number,
): QuerySpec {
  const override = expected.students?.[studentId]?.queries?.[queryIndex];
  return override ?? expected.queries[queryIndex];
}

// ---------------------------------------------------------------------------
// Score report (printed once after all tests)
// ---------------------------------------------------------------------------

const scoreBoard: Record<string, [number, number]> = {};

function recordScore(
  student: string,
  queryIndex: number,
  passed: boolean,
): void {
  if (!scoreBoard[student]) scoreBoard[student] = [0, 0];
  scoreBoard[student][queryIndex] = passed ? 2.5 : 0;
}

afterAll(() => {
  const entries = Object.entries(scoreBoard).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  if (entries.length === 0) return;

  const lines: string[] = [];
  lines.push('');
  lines.push('╔══════════════════════════════════════════════════╗');
  lines.push(`║        RAPORT EVALUARE — ${GRUPA!.toUpperCase().padEnd(22)}║`);
  lines.push('╠══════════════════════════════════════════════════╣');
  lines.push('║  Student                     Q1    Q2    Total  ║');
  lines.push('╠══════════════════════════════════════════════════╣');
  for (const [name, [q1, q2]] of entries) {
    const total = 5 + q1 + q2;
    const padName = name.padEnd(28);
    const p = (n: number) => n.toFixed(1).padStart(4);
    lines.push(`║  ${padName} ${p(q1)}  ${p(q2)}  ${p(total)}   ║`);
  }
  lines.push('╚══════════════════════════════════════════════════╝');
  lines.push('');

  process.stderr.write(lines.join('\n'));
});

// ---------------------------------------------------------------------------
// Test suite
// ---------------------------------------------------------------------------

const expected = loadExpected();
const students = getStudentDirs();

if (students.length === 0) {
  test(`no student folders found in exam/${GRUPA}/`, () => {
    console.warn(`No student folders detected in exam/${GRUPA}/ — nothing to grade.`);
  });
} else {
  describe.each(students)(`[${GRUPA}] Student: %s`, (studentId) => {
    const studentDir = join(EXAM_DIR, studentId);
    const dbPath = join(studentDir, 'exam.sqlite');
    let db: Database.Database | null = null;
    let setupError: string | null = null;

    beforeEach(() => {
      setupError = null;

      if (existsSync(dbPath)) unlinkSync(dbPath);

      try {
        db = new Database(dbPath);
        db.pragma('journal_mode = WAL');
        db.pragma('foreign_keys = ON');

        applySchemaMigrations(db, MIGRATIONS_DIR);

        const dataFile = join(studentDir, 'date.sql');
        if (!existsSync(dataFile)) {
          setupError = `Missing date.sql for ${studentId}`;
          return;
        }
        const dataSql = readFileSync(dataFile, 'utf-8');
        db.exec(dataSql);
      } catch (err: any) {
        setupError = `date.sql error for ${studentId}: ${err.message}`;
      }
    });

    afterEach(() => {
      if (db) db.close();
    });

    const queryFile = join(studentDir, 'interogari.sql');

    test.each([0, 1])('Interogare %i', (qi) => {
      if (setupError) {
        recordScore(studentId, qi, false);
        expect(`setup OK`).toBe(`SETUP FAILED: ${setupError}`);
        return;
      }

      if (!existsSync(queryFile)) {
        recordScore(studentId, qi, false);
        expect('interogari.sql exists').toBe(`Missing interogari.sql for ${studentId}`);
        return;
      }

      const raw = readFileSync(queryFile, 'utf-8');
      const queries = splitQueries(raw);

      if (!queries[qi]) {
        recordScore(studentId, qi, false);
        expect('query extracted').toBe(
          `Could not extract query ${qi + 1} from interogari.sql for ${studentId}`,
        );
        return;
      }

      const spec = resolveQuerySpec(expected, studentId, qi);
      const sql = queries[qi];

      let resultRows: Record<string, unknown>[];

      try {
        if (spec.assert.customSql) {
          db!.exec(sql);
          resultRows = db!
            .prepare(spec.assert.customSql)
            .all() as Record<string, unknown>[];
        } else {
          resultRows = db!.prepare(sql).all() as Record<string, unknown>[];
        }
      } catch (err: any) {
        recordScore(studentId, qi, false);
        expect('SQL OK').toBe(
          `SQL error for ${studentId} query ${qi + 1}: ${err.message}`,
        );
        return;
      }

      const normalised = resultRows.map(normaliseRow);

      let passed = true;

      if (spec.assert.columns && normalised.length > 0) {
        const actualCols = Object.keys(normalised[0]).sort();
        const expectedCols = [...spec.assert.columns].sort();
        if (JSON.stringify(actualCols) !== JSON.stringify(expectedCols)) {
          passed = false;
        }
        expect(actualCols).toEqual(expectedCols);
      }

      if (spec.assert.rowCount != null) {
        if (normalised.length !== spec.assert.rowCount) passed = false;
        expect(normalised).toHaveLength(spec.assert.rowCount);
      }

      if (spec.assert.rows != null) {
        const expectedRows = spec.assert.rows.map(normaliseRow);
        if (spec.assert.unordered) {
          const sorted = sortRows(normalised);
          const sortedExpected = sortRows(expectedRows);
          if (JSON.stringify(sorted) !== JSON.stringify(sortedExpected))
            passed = false;
          expect(sorted).toEqual(sortedExpected);
        } else {
          if (JSON.stringify(normalised) !== JSON.stringify(expectedRows))
            passed = false;
          expect(normalised).toEqual(expectedRows);
        }
      }

      recordScore(studentId, qi, passed);
    });
  });
}
