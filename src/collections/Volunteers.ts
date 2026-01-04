import type { CollectionConfig } from 'payload';

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  fields: [
    { name: 'name', type: 'text' },
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions', hasMany: false },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'organization', type: 'text' },
    { name: 'birthDate', type: 'date' },
    { name: 'phone', type: 'text' },
    { name: 'agreementDocument', type: 'upload', relationTo: 'media' },
    { name: 'coordinator', type: 'relationship', relationTo: 'members', hasMany: false },
    { name: 'userAccount', type: 'relationship', relationTo: 'users', hasMany: false },
  ],
};