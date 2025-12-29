import type { CollectionConfig } from 'payload'

export const FestivalSections: CollectionConfig = {
  slug: 'festival-sections',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      required: false,
      hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 3) {
          return 'Section name must be at least 3 characters long'
        }
        return true
      },
    },
  ],
}
