import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  labels: {
    singular: 'Schedule Item',
    plural: 'Schedule',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false,
      required: true,
    },
    { name: 'startTime', type: 'date' },
    { name: 'endTime', type: 'date' },
    { name: 'activity', type: 'relationship', relationTo: 'activities', hasMany: false },
    { name: 'location', type: 'relationship', relationTo: 'locations', hasMany: false },
  ],
}
