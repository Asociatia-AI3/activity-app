import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.type === 'voting' && data.subType === 'honorary') {
          data.membershipFeeExempt = true
        } else if (data.type === 'voting' && data.subType !== 'honorary') {
          data.membershipFeeExempt = false
        }
        
        data.votingRights = data.type === 'voting'
        
        return data
      },
    ],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      hasMany: false,
    },
    {
      name: 'type',
      type: 'select',
      required: false,
      options: [
        { label: 'Aspirant', value: 'aspirant' },
        { label: 'Voting', value: 'voting' },
      ],
    },
    {
      name: 'subType',
      type: 'select',
      required: false,
      admin: {
        condition: (data) => data.type === 'voting',
        description: 'Fondatorii și membrii de onoare au drepturi speciale. Membrii de onoare nu plătesc cotizație dar pot vota.',
      },
      options: [
        { label: 'Founder', value: 'founder' },
        { label: 'Honorary', value: 'honorary' },
      ],
    },
    {
      name: 'membershipFeeExempt',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.type === 'voting',
        description: 'Membrii de onoare sunt scutiți automat de la plata cotizației.',
        readOnly: true,
      },
    },
    {
      name: 'votingRights',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        readOnly: true,
        description: 'Calculat automat: membri cu drept de vot (inclusiv de onoare) pot participa la votări.',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || val.length < 2) {
          return 'Name must be at least 2 characters long'
        }
        return true
      },
    },
    {
      name: 'organization',
      type: 'text',
      required: false,
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      hasMany: false,
    },
  ],
}
