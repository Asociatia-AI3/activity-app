import { CollectionConfig } from 'payload'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' },
    { name: 'name', type: 'text' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'organization', type: 'text' },
    { name: 'birthDate', type: 'date' },
    { name: 'phone', type: 'text' },
    { name: 'agreementDocument', type: 'upload', relationTo: 'media' },
    { name: 'coordinator', type: 'relationship', relationTo: 'members' },
    { name: 'userAccount', type: 'relationship', relationTo: 'users' },
  ],
}
