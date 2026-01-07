import { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: true,
    },

    { name: 'name', type: 'text', required: true },
    { name: 'organization', type: 'text' },

    {
      name: 'guestType',
      type: 'select',
      hasMany: true,
      options: ['speaker', 'workshop_holder', 'exhibitor'],
    },

    { name: 'bio', type: 'richText' },

    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
    },

    { name: 'website', type: 'text' },
  ],
}
