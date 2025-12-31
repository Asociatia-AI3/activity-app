import type { CollectionConfig } from 'payload'

export const LocationPhotos: CollectionConfig = {
  slug: 'location_photos',
  admin: {
    hidden: true,
  },
  fields: [
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: false,
      defaultValue: 0,
    },
  ],
  timestamps: false,
}
