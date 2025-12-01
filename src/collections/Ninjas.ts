import type { CollectionConfig } from 'payload'

export const Ninjas: CollectionConfig = {
  slug: 'ninjas',
  fields: [
    {
      name: 'childName',
      type: 'text',
      required: true,
    },
    {
      name: 'age',
      type: 'number',
      required: true,
      min: 5,
      max: 18,
    },
    {
      name: 'usefulInfo',
      type: 'textarea',
    },
    {
      name: 'guardianName',
      type: 'text',
      required: true,
    },
    {
      name: 'guardianEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'guardianPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'safetyAgreement',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
    {
      name: 'photoReleaseAgreement',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
  ],
}
