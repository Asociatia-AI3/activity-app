import { CollectionConfig, CollectionSlug } from 'payload';

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' as CollectionSlug, required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'photo', type: 'upload', relationTo: 'media' as CollectionSlug },
    { name: 'organization', type: 'text' },
    { name: 'birthDate', type: 'date' },
    { name: 'phone', type: 'text' },
    { name: 'agreementDocument', type: 'upload', relationTo: 'media' as CollectionSlug },
    { name: 'coordinator', type: 'relationship', relationTo: 'members' as CollectionSlug },
    { name: 'userAccount', type: 'relationship', relationTo: 'users' as CollectionSlug },
  ],
};
