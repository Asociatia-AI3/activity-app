import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  features: ({ defaultFeatures }) =>
    defaultFeatures.filter(
      (feature) => feature.key !== 'link'
    ),
})
