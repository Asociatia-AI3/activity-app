import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // ✅ obligatoriu pentru colecția de utilizatori admin
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: anyone,
    read: anyone,
    update: anyone,
    delete: anyone,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      required: true,
    },
  ],
}
