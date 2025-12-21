import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  labels: {
    singular: 'Member',
    plural: 'Members',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'user',
      label: 'User account',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      unique: true, // 1-1 cu Users
    },
    {
      name: 'type',
      label: 'Member type',
      type: 'select',
      required: true,
      options: [
        { label: 'Aspirant', value: 'aspirant' },
        { label: 'Voting', value: 'voting' },
      ],
    },
    {
      name: 'subType',
      label: 'Sub-type (only for voting)',
      type: 'select',
      options: [
        { label: 'Founder', value: 'founder' },
        { label: 'Honorary', value: 'honorary' },
      ],
      admin: {
        // câmpul apare doar când type === 'voting'
        condition: (_, siblingData) => siblingData?.type === 'voting',
      },
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      label: 'Organization',
      type: 'text',
    },
    {
      name: 'photo',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media', // relație 1-1 cu Media
    },
  ],
}
