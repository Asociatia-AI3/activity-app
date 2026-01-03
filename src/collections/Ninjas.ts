import type { CollectionConfig } from 'payload'

const Ninjas: CollectionConfig = {
  slug: 'ninjas',
  admin: {
    useAsTitle: 'childName',
  },
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
    },
    {
      name: 'photoReleaseAgreement',
      type: 'checkbox',
      required: true,
    },
  ],
}

export default Ninjas
