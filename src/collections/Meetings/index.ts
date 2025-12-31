import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Anti-workshop', value: 'anti-workshop' },
      ],
    },
    {
      name: 'workshopTopic',
      type: 'select',
      options: [
        { label: 'Demo your stack', value: 'Demo your stack' },
        { label: 'F*ck-up nights', value: 'F*ck-up nights' },
        { label: 'Meet the business', value: 'Meet the business' },
      ],
      admin: {
        condition: (data) => data?.type === 'workshop', // Condițional
      },
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members', // Relație 1-la-1
      hasMany: false,
      admin: {
        condition: (data) => data?.type === 'workshop',
      },
    },
    {
      name: 'discussionAgenda',
      type: 'richText',
      admin: {
        condition: (data) => data?.type === 'anti-workshop', // Condițional pentru anti-workshop
      },
    },
  ],
}