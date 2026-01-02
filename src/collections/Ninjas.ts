import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Ninjas: CollectionConfig = {
  slug: 'ninjas',
  labels: {
    singular: 'Ninja',
    plural: 'Ninjas',
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'childName', type: 'text', required: true },
    { name: 'age', type: 'number' },
    { name: 'usefulInfo', type: 'textarea' },
    { name: 'guardianName', type: 'text' },
    { name: 'guardianEmail', type: 'email' },
    { name: 'guardianPhone', type: 'text' },
    { name: 'safetyAgreement', type: 'checkbox', required: true },
    { name: 'photoReleaseAgreement', type: 'checkbox', required: true },
  ],
}
