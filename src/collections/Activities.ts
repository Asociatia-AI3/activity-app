import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions', hasMany: false },
    { name: 'description', type: 'richText' },
    {
      name: 'type',
      type: 'select',
      options: ['expo', 'talk', 'workshop', 'social', 'entertainment'],
    },
    {
      name: 'audience',
      type: 'select',
      hasMany: true,
      options: ['kids', 'students', 'professionals', 'general'],
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
