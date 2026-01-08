import { CollectionConfig } from 'payload/types';

const Guests: CollectionConfig = {
  slug: 'guests',
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
      name: 'organization',
      type: 'text',
    },
    {
      name: 'guestType',
      type: 'checkbox',
      hasMany: true,
      options: ['speaker', 'workshop_holder', 'exhibitor'],
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'website',
      type: 'text',
    },
  ],
};

export default Guests;
