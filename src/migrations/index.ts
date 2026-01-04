import * as migration_20251230_112030 from './20251230_112030'
import * as migration_20251230_113642 from './20251230_113642'

export const migrations = [
  {
    up: migration_20251230_112030.up,
    down: migration_20251230_112030.down,
    name: '20251230_112030',
  },
  {
    up: migration_20251230_113642.up,
    down: migration_20251230_113642.down,
    name: '20251230_113642',
  },
]
