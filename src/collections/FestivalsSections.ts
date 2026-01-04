import type { CollectionConfig } from 'payload'

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false,
    },
  ],
}
