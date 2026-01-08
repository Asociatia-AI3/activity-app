import * as migration_20260108_142410 from './20260108_142410';

export const migrations = [
  {
    up: migration_20260108_142410.up,
    down: migration_20260108_142410.down,
    name: '20260108_142410',
  }
];
