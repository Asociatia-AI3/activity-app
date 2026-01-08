import { CollectionConfig } from 'payload/types';

const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'type',
      type: 'select',
      options: ['expo', 'talk', 'workshop', 'social', 'entertainment'],
      required: true,
    },
    {
      name: 'audience',
      type: 'checkbox',
      hasMany: true,
    },
    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests',
      hasMany: true,
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'festival-sections',
    },
  ],
};

export default Activities;
