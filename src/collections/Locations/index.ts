import { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' },
    { name: 'name', type: 'text' },
    { name: 'address', type: 'text' },
    { name: 'coordinates', type: 'point' },
    { name: 'description', type: 'richText' },
    { name: 'floorPlan', type: 'upload', relationTo: 'media' },
    { name: 'capacity', type: 'number' },
    { name: 'facilities', type: 'array', fields: [{ name: 'facility', type: 'text' }] },
    { name: 'photos', type: 'relationship', relationTo: 'media', hasMany: true },
    { name: 'coordinator', type: 'relationship', relationTo: 'volunteers' },
  ],
}
