import { CollectionConfig } from 'payload'

const Roles: CollectionConfig = {
  slug: 'roles',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}

export default Roles
