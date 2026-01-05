import * as migration_20260105_123030 from './20260105_123030';

export const migrations = [
  {
    up: migration_20260105_123030.up,
    down: migration_20260105_123030.down,
    name: '20260105_123030'
  },
];
