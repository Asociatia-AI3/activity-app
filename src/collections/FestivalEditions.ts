import type { CollectionConfig } from 'payload'

export const FestivalEditions: CollectionConfig = {
  slug: 'festival-editions',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      min: 2020,
      max: 2100,
      validate: (val: number | null | undefined) => {
        const currentYear = new Date().getFullYear()
        if (!val || val < 2020 || val > currentYear + 5) {
          return `Year must be between 2020 and ${currentYear + 5}`
        }
        return true
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 5) {
          return 'Festival title must be at least 5 characters long'
        }
        return true
      },
    },
    {
      name: 'theme',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
  ],
}
