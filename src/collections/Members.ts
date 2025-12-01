import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Aspirant', value: 'aspirant' },
        { label: 'Voting', value: 'voting' },
      ],
    },
    {
      name: 'subType',
      type: 'select',

      admin: {
        condition: (data) => data.type === 'voting',
      },
      options: [
        { label: 'Founder', value: 'founder' },
        { label: 'Honorary', value: 'honorary' },
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
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'linkedin',
      type: 'text',
      label: 'LinkedIn Profile',
      admin: {
        description: 'LinkedIn profile URL',
        placeholder: 'https://linkedin.com/in/username',
      },
    },
  ],
}
