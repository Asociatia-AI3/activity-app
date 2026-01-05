import { CollectionConfig, CollectionSlug } from 'payload';

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  admin: {
    useAsTitle: 'name', 
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions' as CollectionSlug, // ✅ forțează tipul ca să nu mai apară eroare
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
};
