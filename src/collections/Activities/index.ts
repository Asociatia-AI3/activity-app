import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false, 
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Expo', value: 'expo' },
        { label: 'Talk', value: 'talk' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Social', value: 'social' },
        { label: 'Entertainment', value: 'entertainment' },
      ],
      required: true,
    },
    {
      name: 'audience',
      type: 'select',
      hasMany: true, 
      options: [
        { label: 'Kids', value: 'kids' },
        { label: 'Teens', value: 'teens' },
        { label: 'Adults', value: 'adults' },
        { label: 'All', value: 'all' },
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
      admin: {
        description: 'Opțional: Secțiunea din care face parte această activitate.',
      },
    },
  ],
}