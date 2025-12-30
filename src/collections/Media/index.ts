import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  timestamps: true,
}
