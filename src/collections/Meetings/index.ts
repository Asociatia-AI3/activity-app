import { CollectionConfig } from 'payload'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'date', type: 'date', required: true },
    { name: 'venue', type: 'text', required: true },
    { name: 'type', type: 'select', options: ['workshop', 'anti-workshop'] },
    {
      name: 'workshopTopic',
      type: 'select',
      options: ['Demo your stack', 'Meet the business'],
      admin: { condition: (data) => data.type === 'workshop' },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      admin: { condition: (data) => data.type === 'workshop' },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: { condition: (data) => data.type === 'workshop' },
    },
  ],
}