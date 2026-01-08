import { CollectionConfig } from 'payload/types';

const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
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
  ],
};

export default FestivalSections;
