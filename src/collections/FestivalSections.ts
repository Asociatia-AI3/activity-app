import type { CollectionConfig } from 'payload'

const FestivalSections: CollectionConfig = {
  slug: 'festivalSections',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions' as any,
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

export default FestivalSections
