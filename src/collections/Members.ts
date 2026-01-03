import type { CollectionConfig } from 'payload'

const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      unique: true,
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
      options: [
        { label: 'Founder', value: 'founder' },
        { label: 'Honorary', value: 'honorary' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'voting',
      },
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
    },
  ],
}

export default Members
