import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  labels: {
    singular: 'Meeting',
    plural: 'Meetings',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'date', type: 'date', required: true },
    { name: 'venue', type: 'text', required: true },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Anti-Workshop', value: 'anti-workshop' },
      ],
      required: true,
    },
    {
      name: 'workshopTopic',
      type: 'select',
      options: [
        { label: 'Demo your stack', value: 'demo' },
        { label: 'F*ck-up nights', value: 'fuckup' },
        { label: 'Meet the business', value: 'business' },
      ],
      admin: { condition: (data) => data.type === 'workshop' },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      hasMany: false,
      admin: { condition: (data) => data.type === 'workshop' },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      admin: { condition: (data) => data.type === 'workshop' },
    },
  ],
}
