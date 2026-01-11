import { CollectionConfig } from 'payload'

const Schedule: CollectionConfig = {
  slug: 'schedule',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' },
    { name: 'startTime', type: 'date' },
    { name: 'endTime', type: 'date' },
    { name: 'activity', type: 'relationship', relationTo: 'activities' },
    { name: 'location', type: 'relationship', relationTo: 'locations' },
  ],
}

export default Schedule
