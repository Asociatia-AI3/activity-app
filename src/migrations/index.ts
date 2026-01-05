import * as migration_20260105_133414 from './20260105_133414';

export const migrations = [
  {
    up: migration_20260105_133414.up,
    down: migration_20260105_133414.down,
    name: '20260105_133414',
  }
];
