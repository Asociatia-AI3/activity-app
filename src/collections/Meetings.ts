import type { CollectionConfig } from 'payload'

export const Meetings: CollectionConfig = {
  slug: 'meetings',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 5) {
          return 'Meeting title must be at least 5 characters long'
        }
        return true
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'number',
      label: 'Duration (minutes)',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
  ],
}
