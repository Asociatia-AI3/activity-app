import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  fields: [
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Voting Member', value: 'voting' },
        { label: 'Aspirant', value: 'aspirant' },
      ],
      defaultValue: 'aspirant',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Founder', value: 'founder' },
        { label: 'Honorary', value: 'honorary' },
        { label: 'Regular', value: 'regular' },
      ],
      admin: {
        condition: (data) => data.status === 'voting',
      },
    },
  ],
}
