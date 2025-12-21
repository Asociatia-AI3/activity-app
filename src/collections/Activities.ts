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
      relationTo: 'festivalEditions',
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
      type: 'group',
      label: 'Audience',
      fields: [
        { name: 'kids', type: 'checkbox', label: 'Kids' },
        { name: 'teens', type: 'checkbox', label: 'Teens' },
        { name: 'adults', type: 'checkbox', label: 'Adults' },
        { name: 'everyone', type: 'checkbox', label: 'Everyone' },
      ],
    },

    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests',
      hasMany: true, // many-to-many
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'festival-sections',
      required: false,
    },
  ],
}

export default Activities
