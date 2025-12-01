import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions' as any,
      required: true,
      hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'coordinates',
      type: 'point',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'floorPlan',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'capacity',
      type: 'number',
      min: 0,
    },
    {
      name: 'facilities',
      type: 'array',
      fields: [
        {
          name: 'facility',
          type: 'text',
        },
      ],
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
      relationTo: 'volunteers' as any,
      hasMany: false,
    },
  ],
}
