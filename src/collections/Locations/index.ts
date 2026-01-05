import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'address', 'capacity', 'edition'],
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival_editions',
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
      required: true,
    },
    {
      name: 'coordinates',
      type: 'point',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'floorPlan',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'capacity',
      type: 'number',
      required: false,
      min: 0,
    },
    {
      name: 'facilities',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'facility',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'volunteers',
      required: false,
      hasMany: false,
    },
  ],
  timestamps: true,
}
