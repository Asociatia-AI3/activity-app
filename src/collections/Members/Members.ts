import { CollectionConfig } from 'payload'
export const Members: CollectionConfig = {
  slug: 'members',
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users', required: true },
    { name: 'user', type: 'relationship', relationTo: 'users', required: true, hasMany: false },
    { name: 'type', type: 'select', options: ['aspirant', 'voting'], required: true },
    { name: 'subType', type: 'select', options: ['founder', 'honorary'], admin: { condition: (data) => data.type === 'voting' } },
    { name: 'name', type: 'text', required: true },
    { name: 'organization', type: 'text' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'photo', type: 'upload', relationTo: 'media', hasMany: false},
  ],
}
