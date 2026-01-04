import { CollectionConfig } from 'payload'

export const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  fields: [
    { name: 'year', type: 'number', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'theme', type: 'text' },
    { name: 'description', type: 'richText' },
  ],
}