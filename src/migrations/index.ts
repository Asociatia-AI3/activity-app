import * as migration_20251221_145441 from './20251221_145441';

export const migrations = [
  {
    up: migration_20251221_145441.up,
    down: migration_20251221_145441.down,
    name: '20251221_145441'
  },
];
