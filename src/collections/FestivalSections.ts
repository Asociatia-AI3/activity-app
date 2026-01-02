import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  labels: {
    singular: 'Festival Section',
    plural: 'Festival Sections',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false,
      required: true,
    },
    { name: 'name', type: 'text', required: true },
  ],
}
