import type { CollectionConfig } from 'payload'

const Guests: CollectionConfig = {
  slug: 'guests',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festivalEditions',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
    },

    // ✅ checkbox-uri (conform cerinței)
    {
      name: 'guestType',
      type: 'group',
      label: 'Guest Type',
      fields: [
        {
          name: 'speaker',
          type: 'checkbox',
        },
        {
          name: 'workshop_holder',
          type: 'checkbox',
        },
        {
          name: 'exhibitor',
          type: 'checkbox',
        },
      ],
    },

    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        placeholder: 'https://example.com',
      },
      validate: (value: string | undefined | null) => {
        if (!value) return true
        try {
          new URL(value)
          return true
        } catch {
          return 'Please enter a valid URL'
        }
      },
    },
  ],
}

export default Guests
