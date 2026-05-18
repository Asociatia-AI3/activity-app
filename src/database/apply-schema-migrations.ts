import type Database from 'better-sqlite3';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Apply all numbered SQL migration files from `migrationsDir` to an open
 * better-sqlite3 database. Files are sorted lexicographically (so prefix
 * them with 0001_, 0002_, etc.). PRAGMA foreign_keys, BEGIN, and COMMIT
 * wrappers inside each file are stripped because better-sqlite3 manages
 * its own transaction semantics.
 */
export function applySchemaMigrations(
  db: Database.Database,
  migrationsDir: string,
): void {
  if (!existsSync(migrationsDir)) return;

  const files = readdirSync(migrationsDir)
    .filter((f) => /^\d+.*\.sql$/.test(f))
    .sort();

  for (const file of files) {
    const filePath = join(migrationsDir, file);
    let sql = readFileSync(filePath, 'utf-8');
    sql = sql.replace(/PRAGMA foreign_keys\s*=\s*ON;\s*/g, '');
    sql = sql.replace(/BEGIN;\s*/g, '');
    sql = sql.replace(/COMMIT;\s*/g, '');
    db.exec(sql);
  }
}
