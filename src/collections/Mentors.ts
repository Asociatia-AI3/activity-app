import type { CollectionConfig } from 'payload'

const Mentors: CollectionConfig = {
  slug: 'mentors',
  admin: {
    useAsTitle: 'name',
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
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      required: false,
    },
  ],
}

export default Mentors
