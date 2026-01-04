import type { CollectionConfig } from 'payload';

export const Locations: CollectionConfig = {
  slug: 'locations',
  fields: [
    { name: 'name', type: 'text' },
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions', hasMany: false },
    { name: 'address', type: 'text' },
    {
      name: 'coordinates',
      type: 'group',
      fields: [
        { name: 'latitude', type: 'number' },
        { name: 'longitude', type: 'number' },
      ],
    },
    { name: 'description', type: 'richText' },
    { name: 'floorPlan', type: 'upload', relationTo: 'media' },
    { name: 'capacity', type: 'number' },
    {
      name: 'facilities',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    { name: 'photos', type: 'upload', relationTo: 'media', hasMany: true },
    { name: 'coordinator', type: 'relationship', relationTo: 'volunteers', hasMany: false },
  ],
};