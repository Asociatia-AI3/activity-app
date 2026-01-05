import { CollectionConfig, CollectionSlug } from 'payload';

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' as CollectionSlug, required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
    { name: 'type', type: 'select', options: ['expo', 'talk', 'workshop', 'social', 'entertainment'] },
    { name: 'audience', type: 'array', fields: [{ name: 'audienceType', type: 'text' }] },
    { name: 'guests', type: 'relationship', relationTo: 'guests' as CollectionSlug, hasMany: true },
    { name: 'section', type: 'relationship', relationTo: 'festival-sections' as CollectionSlug },
  ],
};
