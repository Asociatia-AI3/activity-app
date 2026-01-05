import { CollectionConfig } from "payload";

export const Ninjas: CollectionConfig = {
    slug: 'ninjas',
    fields: [
        { name: 'childName', type: 'text' },
        { name: 'age', type: 'number' },
        { name: 'usefulInfo', type: 'textarea' },
        { name: 'guardianName', type: 'text' },
        { name: 'guardianEmail', type: 'email' },
        { name: 'guardianPhone', type: 'text' },
        { name: 'safetyAgreement', type: 'checkbox', required: true },
        { name: 'photoReleaseAgreement', type: 'checkbox', required: true }
    ]
}
