import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'edition', 'section'],
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
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
      required: false,
      hasMany: true,
      options: [
        { label: 'Students', value: 'students' },
        { label: 'Professionals', value: 'professionals' },
        { label: 'Entrepreneurs', value: 'entrepreneurs' },
        { label: 'General Public', value: 'general_public' },
      ],
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'festival_sections',
      required: false,
      hasMany: false,
    },
  ],
  timestamps: true,
}
