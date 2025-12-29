import type { CollectionConfig } from 'payload'

export const Ninjas: CollectionConfig = {
  slug: 'ninjas',
  admin: {
    useAsTitle: 'childName',
  },
  fields: [
    {
      name: 'childName',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 2) {
          return 'Child name must be at least 2 characters long'
        }
        return true
      },
    },
    {
      name: 'age',
      type: 'number',
      required: true,
      min: 6,
      max: 17,
      validate: (val: number | null | undefined) => {
        if (!val || val < 6 || val > 17) {
          return 'Age must be between 6 and 17 years'
        }
        return true
      },
    },
    {
      name: 'usefulInfo',
      type: 'textarea',
      required: false,
    },
    {
      name: 'guardianName',
      type: 'text',
      required: false,
    },
    {
      name: 'guardianEmail',
      type: 'email',
      required: true,
      validate: (val) => {
        if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          return 'Please enter a valid email address'
        }
        return true
      },
    },
    {
      name: 'guardianPhone',
      type: 'text',
      required: false,
    },
    {
      name: 'safetyAgreement',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'photoReleaseAgreement',
      type: 'checkbox',
      required: true,
    },
  ],
}
