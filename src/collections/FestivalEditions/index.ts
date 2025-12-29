import type { CollectionConfig } from 'payload'

export const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  admin: { useAsTitle: 'year' },
  fields: [
    { name: 'year', type: 'number', required: true },
    { name: 'theme', type: 'text' },
  ],
}