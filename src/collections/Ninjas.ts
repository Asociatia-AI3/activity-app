import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'

export const Ninjas: CollectionConfig = {
    slug: 'ninjas',
    labels: {
        singular: {
            en: 'Ninja',
            ro: 'Ninja',
        },
        plural: {
            en: 'Ninjas',
            ro: 'Ninjas',
        },
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticated,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'guardianName',
    },
    fields: [
        {
            name: 'childName',
            label: {
                en: 'Child Name',
                ro: 'Numele Copilului',
            },
            type: 'text',
            required: true,
        },
        {
            name: 'age',
            label: {
                en: 'Age',
                ro: 'Vârsta',
            },
            type: 'number',
            required: true,
        },
        {
            name: 'usefulInfo',
            label: {
                en: 'Useful Information',
                ro: 'Informații Utile',
            },
            type: 'textarea',
        },
        {
            name: 'guardianName',
            label: {
                en: 'Guardian Name',
                ro: 'Numele Tutorelui',
            },
            type: 'text',
        },
        {
            name: 'guardianEmail',
            label: {
                en: 'Guardian Email',
                ro: 'Email Tutore',
            },
            type: 'email',
        },
        {
            name: 'guardianPhone',
            label: {
                en: 'Guardian Phone',
                ro: 'Telefon Tutore',
            },
            type: 'text',
        },
        {
            name: 'safetyAgreement',
            label: {
                en: 'Safety Agreement',
                ro: 'Acord de Siguranță',
            },
            type: 'checkbox',
            required: true,
        },
        {
            name: 'photoReleaseAgreement',
            label: {
                en: 'Photo Release Agreement',
                ro: 'Acord de Eliberare a Fotografiei',
            },
            type: 'checkbox',
            required: true,
        }
    ],
}