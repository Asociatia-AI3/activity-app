import type { CollectionConfig } from 'payload'

export const AntiWorkshops: CollectionConfig = {
  slug: 'anti-workshops',
  admin: {
    useAsTitle: 'meeting',
  },
  fields: [
    {
      name: 'meeting',
      type: 'relationship',
      relationTo: 'meetings',
      required: true,
      hasMany: false,
      label: 'Meeting',
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      required: true,
      label: 'Discussion Agenda',
    },
  ],
}
