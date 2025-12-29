import type { CollectionConfig } from 'payload'

export const Workshops: CollectionConfig = {
  slug: 'workshops',
  admin: {
    useAsTitle: 'workshopTopic',
  },
  fields: [
    {
      name: 'meeting',
      type: 'relationship',
      relationTo: 'meetings',
      required: true,
      hasMany: false,
      label: 'Meeting',
    },
    {
      name: 'workshopTopic',
      type: 'select',
      required: true,
      options: [
        { label: 'Demo your stack', value: 'demo_your_stack' },
        { label: 'F*ck-up nights', value: 'fck_up_nights' },
        { label: 'Meet the business', value: 'meet_the_business' },
      ],
    },
    {
      name: 'presenter',
      type: 'relationship',
      relationTo: 'members',
      required: false,
      hasMany: false,
      label: 'Presenter (Member)',
    },
    {
      name: 'materials',
      type: 'richText',
      label: 'Workshop Materials',
      required: false,
    },
  ],
}
