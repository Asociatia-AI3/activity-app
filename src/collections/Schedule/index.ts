import { CollectionConfig, CollectionSlug } from 'payload';

export const Schedules: CollectionConfig = {
  slug: 'schedules',
  admin: { useAsTitle: 'edition' },
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' as CollectionSlug, required: true },
    { name: 'startTime', type: 'date' },
    { name: 'endTime', type: 'date' },
    { name: 'activity', type: 'relationship', relationTo: 'activities' as CollectionSlug },
    { name: 'location', type: 'relationship', relationTo: 'locations' as CollectionSlug },
  ],
};
