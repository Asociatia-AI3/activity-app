import { CollectionConfig } from 'payload/types'

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  labels: {
    singular: 'Schedule',
    plural: 'Schedules',
  },
  admin: {
    useAsTitle: 'startTime',
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
      name: 'startTime',
      type: 'date',
      required: true,
    },
    {
      name: 'endTime',
      type: 'date',
      required: true,
    },
    {
      name: 'activity',
      type: 'relationship',
      relationTo: 'activities',
      required: true,
      hasMany: false,
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
      hasMany: false,
    },
  ],
}
