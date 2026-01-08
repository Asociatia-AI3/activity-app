import { CollectionConfig } from 'payload'

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' },
    { name: 'name', type: 'text' },
  ],
}