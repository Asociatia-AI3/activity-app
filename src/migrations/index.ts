import * as migration_20251201_092917 from './20251201_092917';
import * as migration_20251201_094200 from './20251201_094200';

export const migrations = [
  {
    up: migration_20251201_092917.up,
    down: migration_20251201_092917.down,
    name: '20251201_092917',
  },
  {
    up: migration_20251201_094200.up,
    down: migration_20251201_094200.down,
    name: '20251201_094200'
  },
];
