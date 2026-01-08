import { CollectionConfig } from 'payload/types';

const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'memberType',
      type: 'select',
      options: [
        'voting',
        'aspirant',
        'honorary',
        'founder',
      ],
      required: true,
    },
    {
      name: 'hasVotingRights',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Members;