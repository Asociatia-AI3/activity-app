import type { CollectionConfig } from 'payload'

export const Mentors: CollectionConfig = {
  slug: 'mentors',
  admin: { 
    useAsTitle: 'name' 
  },
  fields: [
    { 
      name: 'name', 
      type: 'text', 
      required: true 
    },
    { 
      name: 'bio', 
      type: 'richText' 
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media', 
      required: true,
    },
    { 
      name: 'userAccount', 
      type: 'relationship', 
      relationTo: 'users',
      hasMany: false, 
    },
  ],
}