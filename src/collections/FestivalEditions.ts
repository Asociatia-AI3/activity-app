import type { CollectionConfig } from 'payload'

export const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
      min: 2000,
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
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
