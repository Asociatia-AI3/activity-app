import { CollectionConfig } from 'payload/types'

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
    { name: 'title', type: 'text', required: true },
    { name: 'date', type: 'date', required: true },
    { name: 'venue', type: 'text', required: true },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Anti-workshop', value: 'anti-workshop' },
      ],
    },
    {
      name: 'workshopTopic',
      type: 'select',
      required: false,
      options: [
        { label: 'Demo your stack', value: 'demo-your-stack' },
        { label: 'F*ck-up nights', value: 'fuck-up-nights' },
        { label: 'Meet the business', value: 'meet-the-business' },
      ],
      admin: {
        condition: (data, siblingData) => siblingData.type === 'workshop',
      },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      required: false,
      hasMany: false,
      admin: {
        condition: (data, siblingData) => siblingData.type === 'workshop',
      },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      required: false,
      admin: {
        condition: (data, siblingData) => siblingData.type === 'anti-workshop',
      },
    },
  ],
}
