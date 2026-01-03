import type { CollectionConfig } from 'payload'

const Guests: CollectionConfig = {
  slug: 'guests',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions' as any,
      required: true,
    },
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
      name: 'guestType',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Speaker', value: 'speaker' },
        { label: 'Workshop holder', value: 'workshop_holder' },
        { label: 'Exhibitor', value: 'exhibitor' },
      ],
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'website',
      type: 'text',
    },
  ],
}

export default Guests
