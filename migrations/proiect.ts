import * as migration_202501225_initial from './202501225_initial';

export const migrations = [
  {
    up: migration_202501225_initial.up,
    down: migration_202501225_initial.down,
    name: '202501225_initial'
  },
];
