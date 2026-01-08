import { CollectionConfig } from 'payload/types';

const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'theme',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
};

export default FestivalEditions;
