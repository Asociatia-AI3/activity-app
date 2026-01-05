import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Locations: CollectionConfig = {
    slug: 'locations',
    labels: {
        singular: {
            en: 'Location',
            ro: 'Locație',
        },
        plural: {
            en: 'Locations',
            ro: 'Locații',
        },
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'name',
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
        },
        {
            name: 'name',
            label: {
                en: 'Name',
                ro: 'Nume',
            },
            type: 'text',
        },
        {
            name: 'address',
            label: {
                en: 'Address',
                ro: 'Adresă',
            },
            type: 'text',
        },
        {
            name: 'coordinates',
            label: {
                en: 'Coordinates',
                ro: 'Coordonate',
            },
            type: 'point',
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
            name: 'floorPlan',
            label: {
                en: 'Floor Plan',
                ro: 'Plan Etaj',
            },
            type: 'relationship',
            relationTo: 'media',
        },
        {
            name: 'capacity',
            label: {
                en: 'Capacity',
                ro: 'Capacitate',
            },
            type: 'number',
        },
        {
            name: 'facilities',
            label: {
                en: 'Facilities',
                ro: 'Facilități',
            },
            type: 'array',
            fields: [
                {
                    name: 'name',
                    label: {
                        en: 'Name',
                        ro: 'Nume',
                    },
                    type: 'text',
                },
            ],
        },
        {
            name: 'photo',
            label: {
                en: 'Photo',
                ro: 'Fotografie',
            },
            type: 'relationship',
            relationTo: 'media',
            hasMany: true,
        },
        {
            name: 'coordinator',
            label: {
                en: 'Coordinator',
                ro: 'Coordonator',
            },
            type: 'relationship',
            relationTo: 'volunteers',
            hasMany: false,
            unique: true,
        },
    ],
}