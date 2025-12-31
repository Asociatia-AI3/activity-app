import type { CollectionConfig } from 'payload'

export const ActivityGuests: CollectionConfig = {
  slug: 'activity_guests',
  admin: {
    hidden: true,
  },
  fields: [
    {
      name: 'activity',
      type: 'relationship',
      relationTo: 'activities',
      required: true,
    },
    {
      name: 'guest',
      type: 'relationship',
      relationTo: 'guests',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: false,
    },
  ],
  timestamps: false,
}
