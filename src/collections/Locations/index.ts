import { CollectionConfig, CollectionSlug } from 'payload';

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' as CollectionSlug, required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'address', type: 'text' },
    { name: 'coordinates', type: 'point' },
    { name: 'description', type: 'richText' },
    { name: 'floorPlan', type: 'upload', relationTo: 'media' as CollectionSlug },
    { name: 'capacity', type: 'number' },
    { name: 'facilities', type: 'array', fields: [{ name: 'facility', type: 'text' }] },
    { name: 'photos', type: 'relationship', relationTo: 'media' as CollectionSlug, hasMany: true },
    { name: 'coordinator', type: 'relationship', relationTo: 'volunteers' as CollectionSlug },
  ],
};
