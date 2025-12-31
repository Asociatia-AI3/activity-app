import type { CollectionConfig } from 'payload'

export const FestivalSections: CollectionConfig = {
  slug: 'festival_sections',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'edition'],
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival_editions',
      required: true,
      hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  timestamps: true,
}
