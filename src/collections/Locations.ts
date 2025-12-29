import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: false,
      hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 3) {
          return 'Location name must be at least 3 characters long'
        }
        return true
      },
    },
    {
      name: 'address',
      type: 'text',
      required: false,
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
      hasMany: false,
    },
    {
      name: 'capacity',
      type: 'number',
      required: false,
      min: 1,
      max: 10000,
      validate: (val: number | null | undefined) => {
        if (val && (val < 1 || val > 10000)) {
          return 'Capacity must be between 1 and 10000'
        }
        return true
      },
    },
    {
      name: 'facilities',
      type: 'array',
      required: false,
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
      required: false,
      hasMany: true,
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'volunteers',
      required: false,
      hasMany: false,
    },
  ],
}
