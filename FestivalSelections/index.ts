import { CollectionConfig } from 'payload/types'

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  labels: {
    singular: 'Festival Section',
    plural: 'Festival Sections',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: true,
      hasMany: false,
    },
    { name: 'name', type: 'text', required: true },
  ],
}
