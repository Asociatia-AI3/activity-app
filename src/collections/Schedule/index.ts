import { CollectionConfig } from 'payload'

export const Schedules: CollectionConfig = {
  slug: 'schedules',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions', hasMany: false },
    { name: 'startTime', type: 'date' },
    { name: 'endTime', type: 'date' },
    { name: 'activity', type: 'relationship', relationTo: 'activities', hasMany: false },
    { name: 'location', type: 'relationship', relationTo: 'locations', hasMany: false },
  ],
}
