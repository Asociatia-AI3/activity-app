import type { CollectionConfig } from 'payload'

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  admin: {
    useAsTitle: 'startTime',
    defaultColumns: ['activity', 'location', 'startTime', 'endTime'],
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival_editions',
      required: true,
      hasMany: false,
    },
    {
      name: 'startTime',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd HH:mm',
        },
      },
    },
    {
      name: 'endTime',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd HH:mm',
        },
      },
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
  timestamps: true,
}
