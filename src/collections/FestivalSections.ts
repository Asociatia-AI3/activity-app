import { CollectionConfig } from 'payload'

const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
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
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

export default FestivalSections