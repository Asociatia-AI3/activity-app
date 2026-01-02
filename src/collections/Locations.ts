import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Locations: CollectionConfig = {
  slug: 'locations',
  labels: {
    singular: 'Location',
    plural: 'Locations',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'address', type: 'text' },
    { name: 'coordinates', type: 'point' },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    { name: 'floorPlan', type: 'relationship', relationTo: 'media' },
    { name: 'capacity', type: 'number' },
    { name: 'facilities', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'photos', type: 'relationship', relationTo: 'media', hasMany: true },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'volunteers',
      hasMany: false,
    },
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false,
      required: true,
    },
  ],
}
