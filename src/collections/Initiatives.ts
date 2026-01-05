import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  labels: {
    singular: {
      en: 'Initiative',
      ro: 'Inițiativă',
    },
    plural: {
      en: 'Initiatives',
      ro: 'Inițiative',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        ro: 'Titlu',
      },
      type: 'text',
      required: true,
      unique: true,
    },
    {
        name: 'description',
        label: {
            en: 'Description',
            ro: 'Descriere',
        },
        type: 'richText',
        required: true,
    },
    {
        name: 'image',
        label: {
            en: 'Image',
            ro: 'Imagine',
        },
        type: 'relationship',
        relationTo: 'media',
        hasMany: true,
        required: true,
    },
    {
        name: 'sitelink',
        label: {
            en: 'Site Link',
            ro: 'Link Site',
        },
        type: 'text',
        required: true,
    },

  ],
}
