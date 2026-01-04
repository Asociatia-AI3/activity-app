import type { CollectionConfig } from 'payload'

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'richText' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'siteLink', type: 'text' },
  ],
}
