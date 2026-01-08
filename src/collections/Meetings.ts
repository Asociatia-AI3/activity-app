import { CollectionConfig } from 'payload/types';

const Meetings: CollectionConfig = {
  slug: 'meetings',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'date', type: 'date', required: true },
    { name: 'venue', type: 'text', required: true },
    {
      name: 'type',
      type: 'select',
      options: ['workshop', 'anti-workshop'],
      required: true,
    },
    {
      name: 'workshopTopic',
      type: 'select',
      options: [
        'Demo your stack',
        'F*ck-up nights',
        'Meet the business',
      ],
      admin: {
        condition: (_, siblingData) => siblingData.type === 'workshop',
      },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'workshop',
      },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'anti-workshop',
      },
    },
  ],
};

export default Meetings;
