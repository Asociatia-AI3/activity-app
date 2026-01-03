import { CollectionConfig } from 'payload'

export const Mentors: CollectionConfig = {
  slug: 'mentors',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'bio', type: 'richText' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'userAccount', type: 'relationship', relationTo: 'users' },
  ],
}