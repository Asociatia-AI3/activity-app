import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Guests: CollectionConfig = {
  slug: 'guests',
  labels: {
    singular: 'Guest',
    plural: 'Guests',
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
    { name: 'name', type: 'text', required: true },
    { name: 'organization', type: 'text' },
    {
      name: 'guestType',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Speaker', value: 'speaker' },
            { label: 'Workshop Holder', value: 'workshop_holder' },
            { label: 'Exhibitor', value: 'exhibitor' },
          ],
        },
      ],
    },
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
    { name: 'website', type: 'text' },
  ],
}
