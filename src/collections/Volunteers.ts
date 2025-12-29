import type { CollectionConfig } from 'payload'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: false,
      hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 2) {
          return 'Volunteer name must be at least 2 characters long'
        }
        return true
      },
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      hasMany: false,
    },
    {
      name: 'organization',
      type: 'text',
      required: false,
    },
    {
      name: 'birthDate',
      type: 'date',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || !/^(\+40|0)[0-9]{9}$/.test(val.replace(/\s/g, ''))) {
          return 'Please enter a valid Romanian phone number (e.g., +40712345678 or 0712345678)'
        }
        return true
      },
    },
    {
      name: 'agreementDocument',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      hasMany: false,
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'members',
      required: false,
      hasMany: false,
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      hasMany: false,
    },
  ],
}
