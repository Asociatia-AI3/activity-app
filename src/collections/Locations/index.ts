import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'address', type: 'text' },
    { name: 'coordinates', type: 'point' }, 
    { name: 'description', type: 'richText' },
    { name: 'capacity', type: 'number' },
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false, 
    },
    {
      name: 'floorPlan',
      type: 'relationship',
      relationTo: 'media', 
      hasMany: false,
    },
    {
      name: 'photos',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true, 
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'volunteers', 
      hasMany: false,
    },
    {
      name: 'facilities',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
}