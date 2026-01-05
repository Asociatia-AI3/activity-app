import * as migration_20260105_114158_initial from './20260105_114158_initial';

export const migrations = [
  {
    up: migration_20260105_114158_initial.up,
    down: migration_20260105_114158_initial.down,
    name: '20260105_114158_initial'
  },
];
