import type { CollectionConfig } from 'payload'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'type'],
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
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd HH:mm',
        },
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
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Anti-workshop', value: 'anti-workshop' },
      ],
      defaultValue: 'workshop',
    },
    {
      name: 'workshopTopic',
      type: 'select',
      options: [
        { label: 'Demo your stack', value: 'demo-your-stack' },
        { label: 'F*ck-up nights', value: 'fuck-up-nights' },
        { label: 'Meet the business', value: 'meet-the-business' },
      ],
      admin: {
        condition: (data) => data.type === 'workshop',
      },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      hasMany: false,
      admin: {
        condition: (data) => data.type === 'workshop',
      },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: {
        condition: (data) => data.type === 'anti-workshop',
      },
    },
  ],
  timestamps: true,
}
