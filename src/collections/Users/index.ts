import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'relationship',
      relationTo: 'roles',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'mentor',
      label: 'Mentor',
      type: 'relationship',
      relationTo: 'mentors',
      hasMany: false, 
    },
  ],
  timestamps: true,
}
