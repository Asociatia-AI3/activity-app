import { CollectionConfig } from 'payload/types'

export const Activities: CollectionConfig = {
  slug: 'activities',
  labels: {
    singular: 'Activity',
    plural: 'Activities',
  },
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
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
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
      type: 'checkbox',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Developers', value: 'developers' },
        { label: 'Students', value: 'students' },
        { label: 'Professionals', value: 'professionals' },
      ],
      hasMany: true,
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
      required: false,
      hasMany: false,
    },
  ],
}
