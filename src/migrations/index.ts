import * as migration_20260112_104416 from './20260112_104416';

export const migrations = [
  {
    up: migration_20260112_104416.up,
    down: migration_20260112_104416.down,
    name: '20260112_104416',
  }
];
