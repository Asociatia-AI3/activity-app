import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Activities: CollectionConfig = {
    slug: 'activities',
    labels: {
        singular: {
            en: 'Activity',
            ro: 'Activitate',
        },
        plural: {
            en: 'Activities',
            ro: 'Activități',
        },
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'edition',
            label: {
                en: 'Festival Edition',
                ro: 'Ediție Festival',
            },
            type: 'relationship',
            relationTo: 'festival-editions',
            hasMany: false,
        },
        {
            name: 'title',
            label: {
                en: 'Title',
                ro: 'Titlu',
            },
            type: 'text',
        },
        {
            name: 'description',
            label: {
                en: 'Description',
                ro: 'Descriere',
            },
            type: 'richText',
        },
        {
            name: 'type',
            label: {
                en: 'Type',
                ro: 'Tip',
            },
            type: 'select',
            options: [
                { label: 'Workshop', value: 'workshop' },
                { label: 'Talk', value: 'talk' },
                { label: 'Entertainment', value: 'entertainment' },
                { label: 'Expo', value: 'expo' },
                { label: 'Social', value: 'social' },
            ],
        },
        {
            name: 'audience',
            label: {
                en: 'Audience',
                ro: 'Public',
            },
            type: 'array',
            fields: [
                {
                    name: 'children',
                    type: 'checkbox',
                    label: {
                        en: 'Children',
                        ro: 'Copii',
                    },
                },
                {
                    name: 'teens',
                    type: 'checkbox',
                    label: {
                        en: 'Teens',
                        ro: 'Adolescenți',
                    },
                },
                {
                    name: 'adults',
                    type: 'checkbox',
                    label: {
                        en: 'Adults',
                        ro: 'Adulți',
                    },
                }
            ],
        },
        {
            name: 'guests',
            label: {
                en: 'Guests',
                ro: 'Invitați',
            },
            type: 'relationship',
            relationTo: 'guests',
            hasMany: true,
        },
        {
            name: 'section',
            label: {
                en: 'Festival Selection',
                ro: 'Selecție Festival',
            },
            type: 'relationship',
            relationTo: 'festival-selections',
            hasMany: false,
        },
    ],
}