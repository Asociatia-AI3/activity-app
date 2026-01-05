import { CollectionConfig } from 'payload'

const Guests: CollectionConfig = {
  slug: 'guests',
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
      name: 'organization',
      type: 'text',
    },
    {
      name: 'guestType',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'select',
          options: [
            { label: 'Speaker', value: 'speaker' },
            { label: 'Workshop Holder', value: 'workshop_holder' },
            { label: 'Exhibitor', value: 'exhibitor' },
          ],
        },
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

export default Guests