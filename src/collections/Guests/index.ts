import { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
  fields: [
    { name: 'edition', type: 'relationship', relationTo: 'festival-editions' },
    { name: 'name', type: 'text' },
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
    { name: 'photo', type: 'upload', relationTo: 'media' },
    {
      name: 'website',
      type: 'text',
      validate: (val: unknown) => {
        if (!val) return true
        if (typeof val !== 'string') return 'siteLink must be a string'
        if (val.startsWith('/')) return true

        try {
          const parsed = new URL(val)
          if (['http:', 'https:'].includes(parsed.protocol)) return true
          return 'siteLink must use http or https protocol'
        } catch (_err) {
          return 'siteLink must be a valid absolute URL (https://example.com) or a relative path starting with /'
        }
      },
    },
  ],
}
