import { sqliteAdapter } from '@payloadcms/db-sqlite'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath, pathToFileURL } from 'url'

import Users from './collections/Users'
import Roles from './collections/Roles'
import Members from './collections/Members'
import Media from './collections/Media'
import Initiatives from './collections/Initiatives'
import Posts from './collections/Posts'
import Meetings from './collections/Meetings'
import Ninjas from './collections/Ninjas'
import Mentors from './collections/Mentors'
import FestivalEditions from './collections/FestivalEditions'
import FestivalSections from './collections/FestivalSections'
import Volunteers from './collections/Volunteers'
import Locations from './collections/Locations'
import Guests from './collections/Guests'
import Activities from './collections/Activities'
import Schedule from './collections/Schedule'

import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { en } from '@payloadcms/translations/languages/en'
import { ro } from '@payloadcms/translations/languages/ro'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const dbPath = path.resolve(dirname, '../payload.db')
const dbURL = pathToFileURL(dbPath).href

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'local-secret',

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  editor: defaultLexical,

  db: sqliteAdapter({
    client: {
      url: dbURL,
    },
    push: false,
  }),

  collections: [
    Users,
    Roles,
    Members,
    Media,
    Initiatives,
    Posts,
    Meetings,
    Ninjas,
    Mentors,
    FestivalEditions,
    FestivalSections,
    Volunteers,
    Locations,
    Guests,
    Activities,
    Schedule,
  ],

  globals: [],

  plugins: [],

  cors: [getServerSideURL()].filter(Boolean),

  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { en, ro },
  },

  sharp,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})



