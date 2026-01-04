import type { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
  fields: [
    { name: 'name', type: 'text' },
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions', hasMany: false },
    { name: 'organization', type: 'text' },
    {
      name: 'guestType',
      type: 'select',
      hasMany: true,
      options: ['speaker', 'workshop_holder', 'exhibitor'],
    },
    { name: 'bio', type: 'richText' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'website', type: 'text' },
  ],
}
