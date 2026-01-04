import * as migration_20260104_185520 from './20260104_185520';
import * as migration_20260104_185934 from './20260104_185934';

export const migrations = [
  {
    up: migration_20260104_185520.up,
    down: migration_20260104_185520.down,
    name: '20260104_185520',
  },
  {
    up: migration_20260104_185934.up,
    down: migration_20260104_185934.down,
    name: '20260104_185934'
  },
];
