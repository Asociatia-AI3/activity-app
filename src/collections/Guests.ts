import type { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
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
          return 'Guest name must be at least 2 characters long'
        }
        return true
      },
    },
    {
      name: 'organization',
      type: 'text',
      required: false,
    },
    {
      name: 'guestType',
      type: 'select',
      required: false,
      hasMany: true,
      options: [
        { label: 'Speaker', value: 'speaker' },
        { label: 'Workshop Holder', value: 'workshop_holder' },
        { label: 'Exhibitor', value: 'exhibitor' },
      ],
    },
    {
      name: 'bio',
      type: 'richText',
      required: false,
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      hasMany: false,
    },
    {
      name: 'website',
      type: 'text',
      required: false,
    },
  ],
}
