import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Members: CollectionConfig = {
  slug: 'members',
  labels: {
    singular: 'Member',
    plural: 'Members',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: true,
    },
    {
      name: 'membershipType',
      type: 'select',
      options: [
        { label: 'Voting', value: 'voting' },
        { label: 'Aspiring', value: 'aspiring' },
        { label: 'Founding', value: 'founding' },
        { label: 'Honorary', value: 'honorary' },
      ],
      required: true,
    },
  ],
}
