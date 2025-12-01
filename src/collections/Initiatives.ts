import type { CollectionConfig } from 'payload'

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  fields: [
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
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'siteLink',
      type: 'text',
      validate: (value?: string | string[] | null) => {
        const v = Array.isArray(value) ? (value[0] ?? '') : (value ?? '')
        if (v && !v.match(/^https?:\/\/.+/)) {
          return 'Please enter a valid URL'
        }
        return true
      },
    },
  ],
}
