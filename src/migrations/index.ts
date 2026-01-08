import * as migration_20251221_180351 from './20251221_180351';
import * as migration_20251221_184859 from './20251221_184859';

export const migrations = [
  {
    up: migration_20251221_180351.up,
    down: migration_20251221_180351.down,
    name: '20251221_180351',
  },
  {
    up: migration_20251221_184859.up,
    down: migration_20251221_184859.down,
    name: '20251221_184859'
  },
];
