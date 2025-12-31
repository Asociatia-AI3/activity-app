import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'nickname', 
      type: 'text',
      label: 'Poreclă (Puncte Extra)',
    },
    {
      name: 'type', 
      type: 'select',
      label: 'Type', 
      options: [
        { label: 'Voting', value: 'voting' },
        { label: 'Aspirant', value: 'aspirant' },
        { label: 'Honorary', value: 'honorary' },
      ],
    },
    { name: 'userAccount', type: 'relationship', relationTo: 'users' },
  ],
}