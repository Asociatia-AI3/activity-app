import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // IMPORTANT: activează autentificarea
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'roles',
      type: 'relationship',
      relationTo: 'roles',
      hasMany: true,
    },
  ],
}

export default Users
