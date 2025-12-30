import type { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
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
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false, 
      required: true,
    },
    {
      name: 'guestType',
      type: 'select',
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
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'website',
      type: 'text', 
    },
  ],
}