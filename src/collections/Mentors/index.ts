import { CollectionConfig } from 'payload/types'

export const Mentors: CollectionConfig = {
  slug: 'mentors',
  labels: {
    singular: 'Mentor',
    plural: 'Mentors',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'bio', type: 'richText' },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: false,
    },
  ],
}
