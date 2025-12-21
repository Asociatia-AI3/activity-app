import type { CollectionConfig } from 'payload'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  labels: {
    singular: 'Meeting',
    plural: 'Meetings',
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
      defaultValue: 'workshop',
    },
    {
      name: 'workshopTopic',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'workshop',
      },
      options: [
        { label: 'Demo your stack', value: 'demo-your-stack' },
        { label: 'F*ck-up nights', value: 'fuckup-nights' },
        { label: 'Meet the business', value: 'meet-the-business' },
      ],
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.type === 'workshop'
        },
      },
    },

    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.type === 'anti-workshop'
        },
      },
    },
  ],
}

export default Meetings
