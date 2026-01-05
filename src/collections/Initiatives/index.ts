import { CollectionConfig } from 'payload/types'

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  labels: {
    singular: 'Initiative',
    plural: 'Initiatives',
  },
  admin: {
    useAsTitle: 'title',
  },
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
      required: false,
      admin: {
        description: 'URL of the initiative site',
      },
      validate: (value) => {
        if (value && !value.match(/^https?:\/\/.+$/)) {
          return 'Must be a valid URL starting with http:// or https://'
        }
        return true
      },
    },
  ],
}
