import * as migration_20260106_184841 from './20260106_184841'

export const migrations = [
  {
    up: migration_20260106_184841.up,
    down: migration_20260106_184841.down,
    name: '20260106_184841',
  },
]
