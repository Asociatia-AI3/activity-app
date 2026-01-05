import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Schedule: CollectionConfig = {
    slug: 'schedule',
    labels: {
        singular: {
            en: 'Schedule Item',
            ro: 'Element Program',
        },
        plural: { 
            en: 'Schedule Items',
            ro: 'Elemente Program',
        },
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'location',
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
            name: 'startTime',
            label: {
                en: 'Start Time',
                ro: 'Data Începerii',
            },
            type: 'date',
        },
        {
            name: 'endTime',
            label: {
                en: 'End Time',
                ro: 'Data Încheierii',
            },
            type: 'date',
        },
        {
            name: 'activity',
            label: {
                en: 'Activity',
                ro: 'Activitate',
            },
            type: 'relationship',
            relationTo: 'activities',
            hasMany: false,
        },
        {
            name: 'location',
            label: {
                en: 'Location',
                ro: 'Locație',
            },
            type: 'relationship',
            relationTo: 'locations',
            hasMany: false,
        },
    ],
} 