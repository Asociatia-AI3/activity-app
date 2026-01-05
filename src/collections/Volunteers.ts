import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Volunteers: CollectionConfig = {
    slug: 'volunteers',
    labels: {
        singular: {
            en: 'Volunteer',
            ro: 'Voluntar',
        },
        plural: {
            en: 'Volunteers',
            ro: 'Voluntari',
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
            name: 'photo',
            label: {
                en: 'Photo',
                ro: 'Fotografie',
            },
            type: 'relationship',
            relationTo: 'media',
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
            name: 'birthdate',
            label: {
                en: 'Birthdate',
                ro: 'Data nașterii',
            },
            type: 'date',
        },
        {
            name: 'phone',
            label: {
                en: 'Phone',
                ro: 'Telefon',
            },
            type: 'text',
        },
        {
            name: 'agreementDocument',
            label: {
                en: 'Agreement Document',
                ro: 'Document de acord',
            },
            type: 'relationship',
            relationTo: 'media',
        },
        {
            name: 'coordinator',
            label: {
                en: 'Coordinator',
                ro: 'Coordonator',
            },
            type: 'relationship',
            relationTo: 'members',
            hasMany: false,
        },
        {
            name: 'userAccount',
            label: {
                en: 'User Account',
                ro: 'Cont Utilizator',
            },
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
            unique: true,
        }
    ],
    
}