import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Guests: CollectionConfig = {
    slug: 'guests',
    labels: {
        singular: {
            en: 'Guest',
            ro: 'Invitat',
        },
        plural: {
            en: 'Guests',
            ro: 'Invitați',
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
            hasMany: false,
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
            name: 'organization',
            label: {
                en: 'Organization',
                ro: 'Organizație',
            },
            type: 'text',
        },
        {
            name: 'guestType',
            label: {
                en: 'Guest Type',
                ro: 'Tip Invitat',
            },
            type: 'array',
            fields: [
                {
                    name: 'speaker',
                    type: 'checkbox',
                    label: {
                        en: 'Speaker',
                        ro: 'Speaker',
                    },
                },
                {
                    name: 'workshopHolder',
                    type: 'checkbox',
                    label: {
                        en: 'Workshop Holder',
                        ro: 'Organizator Workshop',
                    },
                },
                {
                    name: 'exhibitor',
                    type: 'checkbox',
                    label: {
                        en: 'Exhibitor',
                        ro: 'Expozant',
                    },
                },
            ],
        },
        {
            name: 'bio',
            label: {
                en: 'Bio',
                ro: 'Biografie',
            },
            type: 'richText',
        },
        {
            name: 'photo',
            label: {
                en: 'Photo',
                ro: 'Fotografie',
            },
            type: 'relationship',
            relationTo: 'media',
            hasMany: false,
        },
        {
            name: 'website',
            label: {
                en: 'Website',
                ro: 'Website',
            },
            type: 'text',
        },
    ],
}