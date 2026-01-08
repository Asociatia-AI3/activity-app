import { CollectionConfig } from 'payload/types';

const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'organization',
      type: 'text',
    },
    {
      name: 'birthDate',
      type: 'date',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'agreementDocument',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'members',
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
};

export default Volunteers;
