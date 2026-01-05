import type { CollectionConfig } from 'payload'

export const FestivalEditions: CollectionConfig = {
  slug: 'festival_editions',
  admin: {
    useAsTitle: 'year',
    defaultColumns: ['year', 'title', 'theme'],
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
      min: 2020,
      max: 2100,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'theme',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
  ],
  timestamps: true,
}
