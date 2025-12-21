import type { CollectionConfig } from 'payload'

const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'organization',
      type: 'text',
    },
    {
      name: 'birthDate',
      type: 'date',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'agreementDocument',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'members', // many-to-one
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      unique: true, // 1-la-1
      required: false, // opțional
    },
  ],
}

export default Volunteers
