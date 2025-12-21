import { CollectionConfig } from 'payload'

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
      label: 'Safety Agreement (required)',
      required: true,
    },
    {
      name: 'photoReleaseAgreement',
      type: 'checkbox',
      label: 'Photo Release Agreement (required)',
      required: true,
    },
  ],
}

export default Ninjas
