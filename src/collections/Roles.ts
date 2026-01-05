import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    singular: {
      en: 'Role',
      ro: 'Rol',
    },
    plural: {
      en: 'Roles',
      ro: 'Roluri',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        ro: 'Nume',
      },
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
