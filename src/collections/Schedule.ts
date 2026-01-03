import type { CollectionConfig } from 'payload'

const Schedule: CollectionConfig = {
  slug: 'schedule',
  admin: {
    useAsTitle: 'startTime',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions',
      required: true,
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
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations' as any,
      required: true,
    },
  ],
}

export default Schedule
