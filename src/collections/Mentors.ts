import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'


export const Mentors: CollectionConfig = {
    slug: 'mentors',
    labels: {
        singular: {
            en: 'Mentor',
            ro: 'Mentor',
        },
        plural: {
            en: 'Mentors',
            ro: 'Mentori',
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
            name: 'name',
            label: {
                en: 'Name',
                ro: 'Nume',
            },
            type: 'text',
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