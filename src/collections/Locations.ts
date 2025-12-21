import type { CollectionConfig } from 'payload'

const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions',
      required: true,
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
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'capacity',
      type: 'number',
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
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'volunteers',
      unique: true, // 1-la-1
      required: false,
    },
  ],
}

export default Locations
