import { CollectionConfig } from 'payload'

const Mentors: CollectionConfig = {
  slug: 'mentors',
  fields: [
    { name: 'name', type: 'text' },
    { name: 'bio', type: 'richText' },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
}

export default Mentors
