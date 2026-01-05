import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Members: CollectionConfig = {
    slug: 'members',
    labels: {
        singular: {
            en: 'Member',
            ro: 'Membru',
        },
        plural: {
            en: 'Members',
            ro: 'Membri',
        },
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'role',
    },
    fields: [
        {
            name: 'name',
            label: {
                en: 'Name',
                ro: 'Nume',
            },
            type: 'text',
            required: true,
            unique: true,
    
        },
        {
            name: 'role',
            label: {
                en: 'Role',
                ro: 'Rol',
            },
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Member', value: 'member'},
            ],
            required: true,
        },
        {
            name: 'membership_type',
            label: {
                en: 'Membership Type',
                ro: 'Tipul de Membru',
            },
            type: 'select',
            options: [
                { label: 'Votting member', value: 'voting' },
                { label: 'Aspirant', value: 'aspirant' },
            ],
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData.role === 'member',
            }
        },
        {name: 'subscription_type',
            label: {
                en: 'Subscription Type',
                ro: 'Tipul Abonamentului',
            },
            type: 'select',
            options: [
                { label: 'Honorary member', value: 'honorary' },
                { label: 'Founder', value: 'founder' },
            ],
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData.membership_type === 'voting',
            }
        },
        {
            name: 'cotization_payer',
            label: { en: 'Cotization Payer', ro: 'Plătitor Cotizație' },
            type: 'checkbox',
            admin: {
                condition: (_, siblingData) => siblingData.membership_type === 'voting',
                readOnly: true,
            },
        },
    ],
    hooks: {
        beforeChange: [
            ({ data }) => {
                if (data.membership_type === 'voting') {
                if (data.subscription_type === 'founder') {
                    data.cotization_payer = true
                } else if (data.subscription_type === 'honorary') {
                    data.cotization_payer = false
                }
                } else {
                data.cotization_payer = undefined
                }
                return data
            },
        ],
    },
    
}