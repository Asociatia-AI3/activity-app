import type { CollectionConfig } from 'payload'

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
    },
    {
      name: 'workshopTopic',
      type: 'select',
      options: [
        { label: 'Demo your stack', value: 'demo_your_stack' },
        { label: 'F*ck-up nights', value: 'fuckup_nights' },
        { label: 'Meet the business', value: 'meet_the_business' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'workshop',
      },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members' as any,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'workshop',
      },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'anti-workshop',
      },
    },
  ],
}

export default Meetings
