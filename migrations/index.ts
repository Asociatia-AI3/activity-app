import * as migration_20260105_180059 from './20260105_180059';

export const migrations = [
  {
    up: migration_20260105_180059.up,
    down: migration_20260105_180059.down,
    name: '20260105_180059'
  },
];
