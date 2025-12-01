import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions' as any,
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
        { label: 'Teens', value: 'teens' },
        { label: 'Adults', value: 'adults' },
        { label: 'Professionals', value: 'professionals' },
        { label: 'General Public', value: 'general_public' },
      ],
    },
    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests' as any,
      hasMany: true,
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'festival-sections' as any,
      hasMany: false,
    },
  ],
}
