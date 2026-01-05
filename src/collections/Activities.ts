import { CollectionConfig } from 'payload'

const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Exhibition', value: 'expo' },
        { label: 'Talk', value: 'talk' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Social', value: 'social' },
        { label: 'Entertainment', value: 'entertainment' },
      ],
    },
    {
      name: 'audience',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests',
      hasMany: true,
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'festival-sections',
      hasMany: false,
    },
  ],
}

export default Activities