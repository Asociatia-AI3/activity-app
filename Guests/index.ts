import { CollectionConfig } from 'payload/types'

export const Guests: CollectionConfig = {
  slug: 'guests',
  labels: {
    singular: 'Guest',
    plural: 'Guests',
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
    { name: 'organization', type: 'text' },
    {
      name: 'guestType',
      type: 'checkbox',
      options: [
        { label: 'Speaker', value: 'speaker' },
        { label: 'Workshop Holder', value: 'workshop_holder' },
        { label: 'Exhibitor', value: 'exhibitor' },
      ],
      hasMany: true,
    },
    { name: 'bio', type: 'richText' },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'website',
      type: 'text',
      required: false,
      admin: {
        description: 'Website URL',
      },
      validate: (value) => {
        if (value && !value.match(/^https?:\/\/.+$/)) {
          return 'Must be a valid URL starting with http:// or https://'
        }
        return true
      },
    },
  ],
}
