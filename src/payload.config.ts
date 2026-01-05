import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { buildConfig, PayloadRequest } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { en } from '@payloadcms/translations/languages/en'
import { ro } from '@payloadcms/translations/languages/ro'

// Import colecții noi
import { Roles } from './collections/roles'
import { Members } from './collections/members'
import { Initiatives } from './collections/initiatives'
import { Meetings } from './collections/meetings'
import { Ninjas } from './collections/ninjas'
import { Mentors } from './collections/mentors'
import { FestivalEditions } from './collections/festival-editions'
import { FestivalSections } from './collections/festival-sections'
import { Locations } from './collections/locations'
import { Guests } from './collections/guests'
import { Volunteers } from './collections/volunteers'
import { Activities } from './collections/activities'
import { Schedule } from './collections/schedule'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },

  editor: defaultLexical,

  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),

  collections: [
    Pages,
    Posts,
    Media,
    Categories,
    Users,

    Roles,
    Members,
    Initiatives,
    Meetings,
    Ninjas,
    Mentors,
    FestivalEditions,
    FestivalSections,
    Locations,
    Guests,
    Volunteers,
    Activities,
    Schedule,
  ],

  cors: [getServerSideURL()].filter(Boolean),

  globals: [Header, Footer],

  plugins: [...plugins],

  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { en, ro },
  },

  secret: process.env.PAYLOAD_SECRET,

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
