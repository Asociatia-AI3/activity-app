import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Mentors: CollectionConfig = {
  slug: 'mentors',
  labels: {
    singular: 'Mentor',
    plural: 'Mentors',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'bio',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    { name: 'photo', type: 'relationship', relationTo: 'media' },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
  ],
}
