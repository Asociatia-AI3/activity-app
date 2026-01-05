import { CollectionConfig } from 'payload'

const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: true,
      hasMany: false,
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
      relationTo: 'members',
      hasMany: false,
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
  ],
}

export default Volunteers