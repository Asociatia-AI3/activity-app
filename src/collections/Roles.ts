import type { CollectionConfig } from 'payload'

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
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 2) {
          return 'Role name must be at least 2 characters long'
        }
        if (!/^[a-z_]+$/.test(val)) {
          return 'Role name must contain only lowercase letters and underscores'
        }
        return true
      },
    },
  ],
}
