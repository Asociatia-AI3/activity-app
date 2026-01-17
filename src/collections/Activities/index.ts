import { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions', hasMany: false },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'richText' },
    { name: 'type', type: 'select', options: ['expo', 'talk', 'workshop', 'social', 'entertainment'] },
    { name: 'audience', type: 'array', fields: [{ name: 'audienceType', type: 'text' }] }, // Checkbox array needed, but no options provided in the requirements
    { name: 'guests', type: 'relationship', relationTo: 'guests', hasMany: true },
    { name: 'section', type: 'relationship', relationTo: 'festival-sections', hasMany: false },
  ],
}
