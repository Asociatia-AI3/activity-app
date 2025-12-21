import { CollectionConfig } from 'payload'

export const Roles: CollectionConfig = {
  slug: 'roles',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'permissions',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Read', value: 'read' },
        { label: 'Create', value: 'create' },
        { label: 'Update', value: 'update' },
        { label: 'Delete', value: 'delete' },
        { label: 'Admin', value: 'admin' },
      ],
    },
  ],
}
