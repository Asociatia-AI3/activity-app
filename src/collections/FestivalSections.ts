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
      relationTo: 'festivalEditions',
      required: true, // pentru că o secțiune trebuie să aparțină unei ediții
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

export default FestivalSections
