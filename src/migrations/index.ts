import * as migration_20260105_083644_initial from './20260105_083644_initial';

export const migrations = [
  {
    up: migration_20260105_083644_initial.up,
    down: migration_20260105_083644_initial.down,
    name: '20260105_083644_initial'
  },
];
