import type { CollectionConfig } from 'payload'

export const Ninjas: CollectionConfig = {
  slug: 'ninjas',
  admin: { useAsTitle: 'childName' },
  fields: [
    { name: 'childName', type: 'text', required: true },
    { name: 'parentEmail', type: 'email', required: true },
    { name: 'safetyAgreement', type: 'checkbox', required: true },
  ],
}