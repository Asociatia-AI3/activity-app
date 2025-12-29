import * as migration_20251229_152204_tema_finala_ai3 from './20251229_152204_tema_finala_ai3';
import * as migration_20251229_152657_init from './20251229_152657_init';
import * as migration_20251229_161016_adaugare_nickname_membru from './20251229_161016_adaugare_nickname_membru';

export const migrations = [
  {
    up: migration_20251229_152204_tema_finala_ai3.up,
    down: migration_20251229_152204_tema_finala_ai3.down,
    name: '20251229_152204_tema_finala_ai3',
  },
  {
    up: migration_20251229_152657_init.up,
    down: migration_20251229_152657_init.down,
    name: '20251229_152657_init',
  },
  {
    up: migration_20251229_161016_adaugare_nickname_membru.up,
    down: migration_20251229_161016_adaugare_nickname_membru.down,
    name: '20251229_161016_adaugare_nickname_membru'
  },
];
