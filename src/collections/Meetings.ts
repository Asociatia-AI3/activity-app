import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { generatePreviewPath } from '../utilities/generatePreviewPath'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  labels: {
        singular: {
            en: 'Meeting',
            ro: 'Întâlnire',
        },
        plural: {
            en: 'Meetings',
            ro: 'Întâlniri',
        },
    },
  access: {
    create: authenticated,
    read: () => true, // adjust if needed
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
        position: 'sidebar',
      },
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Anti-workshop', value: 'anti-workshop' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'workshopTopic',
      type: 'select',
      options: [
        { label: 'Demo your stack', value: 'demo-your-stack' },
        { label: 'F*ck-up nights', value: 'fck-up-nights' },
        { label: 'Meet the business', value: 'meet-the-business' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'workshop',
      },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      required: false,
      admin: {
        position: 'sidebar',
        condition: (_, siblingData) => siblingData?.type === 'workshop',
      },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'workshop',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Clean up fields if not a workshop
        if (data.type !== 'workshop') {
          data.workshopTopic = undefined
          data.presenter = undefined
          data.discussionAgenda = undefined
        }
        return data
      },
    ],
  },
  defaultPopulate: {
    presenter: true, // always populate presenter relationship by default
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}