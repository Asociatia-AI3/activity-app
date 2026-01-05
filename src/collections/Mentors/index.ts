import type { CollectionConfig } from 'payload'

export const Mentors: CollectionConfig = {
  slug: 'mentors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'userAccount'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
      required: false,
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      hasMany: false,
    },
  ],
  timestamps: true,
}
