import { CollectionConfig } from 'payload'

const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'membershipType',
      type: 'select',
      required: true,
      options: [
        { label: 'Voting Member', value: 'voting' },
        { label: 'Aspirant', value: 'aspirant' },
      ],
    },
    {
      name: 'specialStatus',
      type: 'select',
      admin: {
        condition: (data) => data.membershipType === 'voting',
      },
      options: [
        { label: 'Founding Member', value: 'founding' },
        { label: 'Honorary Member', value: 'honorary' },
      ],
    },
    {
      name: 'joinedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'paysMembershipFee',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
  ],
}

export default Members