import type { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'organization', 'edition'],
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival_editions',
      required: true,
      hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
      required: false,
    },
    {
      name: 'guestType',
      type: 'select',
      required: true,
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
    },
    {
      name: 'website',
      type: 'text',
      required: false,
    },
  ],
  timestamps: true,
}
