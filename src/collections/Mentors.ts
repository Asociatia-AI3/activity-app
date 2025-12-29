import type { CollectionConfig } from 'payload'

export const Mentors: CollectionConfig = {
  slug: 'mentors',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 2) {
          return 'Mentor name must be at least 2 characters long'
        }
        return true
      },
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
      hasMany: false,
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      hasMany: false,
    },
  ],
}
