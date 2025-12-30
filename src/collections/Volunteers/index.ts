import type { CollectionConfig } from 'payload'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
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
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false, 
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
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
      admin: {
        description: 'Opțional: Contul de utilizator asociat voluntarului.',
      },
    },
  ],
}