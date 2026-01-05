import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { a } from 'vitest/dist/chunks/suite.d.FvehnV49'


export const FestivalSelections: CollectionConfig = {
    slug: 'festival-selections',
    labels: {
        singular: {
            en: 'Festival Selection',
            ro: 'Selecție Festival',
        },
        plural: {
            en: 'Festival Selections',
            ro: 'Selecții Festival',
        },
    },
    access: {
        read: authenticated,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    admin: {
        useAsTitle: 'name',
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
        },
        {
            name: 'edition',
            label: {
                en: 'Festival Edition',
                ro: 'Ediție Festival',
            },
            type: 'relationship',
            relationTo: 'festival-editions',
            hasMany: false,
        }
    ],
}
