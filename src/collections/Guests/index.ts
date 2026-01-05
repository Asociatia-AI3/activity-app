import { CollectionConfig, CollectionSlug } from 'payload';

export const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  fields: [
    { name: 'year', type: 'number', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'theme', type: 'text' },
    { name: 'description', type: 'richText' },
  ],
};

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' as CollectionSlug, required: true },
    { name: 'name', type: 'text', required: true },
  ],
};

export const Guests: CollectionConfig = {
  slug: 'guests',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' as CollectionSlug, required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'organization', type: 'text' },
    {
      name: 'guestType',
      type: 'group',
      admin: { description: 'Mark roles that apply' },
      fields: [
        { name: 'speaker', type: 'checkbox', label: 'Speaker' },
        { name: 'workshop_holder', type: 'checkbox', label: 'Workshop holder' },
        { name: 'exhibitor', type: 'checkbox', label: 'Exhibitor' },
      ],
    },
    { name: 'bio', type: 'richText' },
    { name: 'photo', type: 'upload', relationTo: 'media' as CollectionSlug },
    {
      name: 'website',
      type: 'text',
      validate: (val: unknown) => {
        if (!val) return true;
        if (typeof val !== 'string') return 'siteLink must be a string';
        if (val.startsWith('/')) return true;
        try {
          const parsed = new URL(val);
          if (['http:', 'https:'].includes(parsed.protocol)) return true;
          return 'siteLink must use http or https protocol';
        } catch {
          return 'siteLink must be a valid absolute URL (https://example.com) or a relative path starting with /';
        }
      },
    },
  ],
};
