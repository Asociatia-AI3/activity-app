import type { CollectionConfig } from 'payload'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
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
      required: true,
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Anti-Workshop', value: 'anti-workshop' },
      ],
    },
    {
      name: 'workshopTopic',
      type: 'select',
      admin: {
        condition: (data) => data.type === 'workshop',
      },
      options: [
        { label: 'Demo your stack', value: 'demo_your_stack' },
        { label: 'F*ck-up nights', value: 'fuckup_nights' },
        { label: 'Meet the business', value: 'meet_the_business' },
      ],
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members' as any,
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
}
