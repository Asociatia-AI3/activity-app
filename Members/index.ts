import { CollectionConfig } from 'payload/types'

export const Members: CollectionConfig = {
  slug: 'members',
  labels: {
    singular: 'Member',
    plural: 'Members',
  },
  admin: {
    useAsTitle: 'user',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'votingRight',
      type: 'checkbox',
      label: 'Has Voting Right',
    },
    {
      name: 'aspirant',
      type: 'checkbox',
      label: 'Aspirant Member',
    },
    {
      name: 'founder',
      type: 'checkbox',
      label: 'Founder Member',
    },
    {
      name: 'honoraryMember',
      type: 'checkbox',
      label: 'Honorary Member (no membership fee, can vote)',
    },
  ],
}
