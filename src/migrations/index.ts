import * as migration_0001_initial from './0001_initial';
import * as migration_20260101_100141_initial_schema from './20260101_100141_initial_schema';

export const migrations = [
  {
    up: migration_0001_initial.up,
    down: migration_0001_initial.down,
    name: '0001_initial',
  },
  {
    up: migration_20260101_100141_initial_schema.up,
    down: migration_20260101_100141_initial_schema.down,
    name: '20260101_100141_initial_schema'
  },
];
