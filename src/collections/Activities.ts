import type { CollectionConfig } from 'payload'

const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions' as any,
      required: true,
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
        { label: 'Expo', value: 'expo' },
        { label: 'Talk', value: 'talk' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Social', value: 'social' },
        { label: 'Entertainment', value: 'entertainment' },
      ],
    },
    {
      name: 'audience',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Kids', value: 'kids' },
        { label: 'Students', value: 'students' },
        { label: 'Professionals', value: 'professionals' },
        { label: 'Everyone', value: 'everyone' },
      ],
    },
    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests' as any ,
      hasMany: true,
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'festivalSections' as any,
    },
  ],
}

export default Activities
