import { CollectionConfig } from 'payload'

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'content', type: 'richText' },
  ],
}

export default Pages

