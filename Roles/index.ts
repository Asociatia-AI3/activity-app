import { CollectionConfig } from 'payload/types'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    singular: 'Role',
    plural: 'Roles',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
