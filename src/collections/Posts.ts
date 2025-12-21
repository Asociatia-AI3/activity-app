import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'initiative',
      label: 'Initiative',
      type: 'relationship',
      relationTo: 'initiatives',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
    },
  ],
}

export default Posts
