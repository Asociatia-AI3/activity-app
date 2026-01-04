import * as migration_20260104_094212 from './20260104_094212';

export const migrations = [
  {
    up: migration_20260104_094212.up,
    down: migration_20260104_094212.down,
    name: '20260104_094212'
  },
];
