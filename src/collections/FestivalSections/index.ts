import type { CollectionConfig } from 'payload'

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' },
  ],
}