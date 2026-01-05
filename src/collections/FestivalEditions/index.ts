import { CollectionConfig } from 'payload/types'

export const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  labels: {
    singular: 'Festival Edition',
    plural: 'Festival Editions',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'year', type: 'number', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'theme', type: 'text' },
    { name: 'description', type: 'richText' },
  ],
}
