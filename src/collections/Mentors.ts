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
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      unique: true, // 1-la-1
      required: false, // optional
    },
  ],
}

export default Mentors
