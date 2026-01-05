import * as migration_20260105_160938_initial from './20260105_160938_initial';

export const migrations = [
  {
    up: migration_20260105_160938_initial.up,
    down: migration_20260105_160938_initial.down,
    name: '20260105_160938_initial'
  },
];
