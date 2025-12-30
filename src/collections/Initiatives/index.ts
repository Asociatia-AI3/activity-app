import type { CollectionConfig } from 'payload'

export const Initiatives: CollectionConfig = {
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
      required: false,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'siteLink',
      type: 'text',
      required: false,
    },
  ],
  timestamps: true,
}
