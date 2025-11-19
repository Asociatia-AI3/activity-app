import * as migration_20251119_104925 from './20251119_104925';

export const migrations = [
  {
    up: migration_20251119_104925.up,
    down: migration_20251119_104925.down,
    name: '20251119_104925'
  },
];
