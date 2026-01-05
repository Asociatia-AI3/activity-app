import { CollectionConfig } from 'payload'

const Meetings: CollectionConfig = {
  slug: 'meetings',
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
        { label: 'Demo Your Stack', value: 'Demo your stack' },
        { label: 'F*ck-up Nights', value: 'F*ck-up nights' },
        { label: 'Meet the Business', value: 'Meet the business' },
      ],
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
}

export default Meetings