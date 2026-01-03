import type { CollectionConfig } from 'payload'

const Initiatives: CollectionConfig = {
  slug: 'initiatives',
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
      name: 'description',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'siteLink',
      type: 'text',
      admin: {
        placeholder: 'https://example.com',
      },
    },
  ],
}

export default Initiatives
