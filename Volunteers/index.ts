import { CollectionConfig } from 'payload/types'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  labels: {
    singular: 'Volunteer',
    plural: 'Volunteers',
  },
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
    { name: 'name', type: 'text', required: true },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    { name: 'organization', type: 'text' },
    { name: 'birthDate', type: 'date' },
    { name: 'phone', type: 'text' },
    {
      name: 'agreementDocument',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
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
      required: false,
    },
  ],
}
