import { CollectionConfig } from 'payload';

export const Members: CollectionConfig = {
  slug: 'members',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Associated User',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Aspirant', value: 'aspirant' },
        { label: 'Voting Member', value: 'voting' },
      ],
    },
    {
      name: 'subType',
      type: 'select',
      admin: {
        condition: ({ type }) => type === 'voting',
      },
      options: [
        { value: 'founder', label: 'Founder Member' },
        { value: 'honorary', label: 'Honorary Member' },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
