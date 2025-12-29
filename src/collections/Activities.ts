import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: false,
      hasMany: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 5) {
          return 'Activity title must be at least 5 characters long'
        }
        return true
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'type',
      type: 'select',
      required: false,
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
        { label: 'General Public', value: 'general_public' },
      ],
    },
    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests',
      required: false,
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
