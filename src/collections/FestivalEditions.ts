import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const FestivalEditions: CollectionConfig = {
    slug: 'festival-editions',
    labels: {
        singular: {
            en: 'Festival Edition',
            ro: 'Ediție Festival',
        },
        plural: {
            en: 'Festival Editions',
            ro: 'Ediții Festival',
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
            name: 'year',
            label: {
                en: 'Year',
                ro: 'An',
            },
            type: 'number',
            required: true,
        },
        {
            name: 'title',
            label: {
                en: 'Title',
                ro: 'Titlu',
            },
            type: 'text',
            required: true,
        },
        {
            name: 'theme',
            label: {
                en: 'Theme',
                ro: 'Temă',
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
    ],
}