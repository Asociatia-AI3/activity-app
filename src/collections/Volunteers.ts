import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
  labels: {
    singular: 'Volunteer',
    plural: 'Volunteers',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'photo', type: 'relationship', relationTo: 'media' },
    { name: 'organization', type: 'text' },
    { name: 'birthDate', type: 'date' },
    { name: 'phone', type: 'text' },
    { name: 'agreementDocument', type: 'relationship', relationTo: 'media' },
    {
      name: 'coordinator',
      type: 'relationship',
      relationTo: 'members',
      hasMany: false,
    },
    {
      name: 'userAccount',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'festival-editions',
      hasMany: false,
      required: true,
    },
  ],
}
