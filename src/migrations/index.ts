import * as migration_20260104_163758 from './20260104_163758';
import * as migration_20260104_172956 from './20260104_172956';

export const migrations = [
  {
    up: migration_20260104_163758.up,
    down: migration_20260104_163758.down,
    name: '20260104_163758',
  },
  {
    up: migration_20260104_172956.up,
    down: migration_20260104_172956.down,
    name: '20260104_172956'
  },
];
