import { CollectionConfig } from 'payload'

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'siteLink',
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