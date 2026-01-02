import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Activities: CollectionConfig = {
  slug: 'activities',
  labels: {
    singular: 'Activity',
    plural: 'Activities',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false,
      required: true,
    },
    { name: 'title', type: 'text', required: true },
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
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Expo', value: 'expo' },
        { label: 'Talk', value: 'talk' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Social', value: 'social' },
        { label: 'Entertainment', value: 'entertainment' },
      ],
    },
    { name: 'audience', type: 'array', fields: [{ name: 'type', type: 'text' }] },
    { name: 'guests', type: 'relationship', relationTo: 'guests', hasMany: true },
    { name: 'section', type: 'relationship', relationTo: 'festival-sections', hasMany: false },
  ],
}
