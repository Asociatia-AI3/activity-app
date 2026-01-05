import * as migration_20260104_141048_initial from './20260104_141048_initial';

export const migrations = [
  {
    up: migration_20260104_141048_initial.up,
    down: migration_20260104_141048_initial.down,
    name: '20260104_141048_initial'
  },
];
