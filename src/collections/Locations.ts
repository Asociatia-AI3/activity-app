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
      relationTo: 'festivalEditions' as any,
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
      type: 'relationship',
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
          required: true,
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
    },
  ],
}

export default Locations
