import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone.ts'
import { authenticated } from '../access/authenticated.ts'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    singular: 'Role',
    plural: 'Roles',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
