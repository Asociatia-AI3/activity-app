import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath, pathToFileURL } from 'url'
import sharp from 'sharp'

// Importurile colecțiilor tale
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Roles } from './collections/Roles'
import { Members } from './collections/Members'
import { Initiatives } from './collections/Initiatives'
import { Meetings } from './collections/Meetings'
import { Ninjas } from './collections/Ninjas'
import { Mentors } from './collections/Mentors'
import { FestivalEditions } from './collections/FestivalsEditions'
import { FestivalSections } from './collections/FestivalsSections'
import { Locations } from './collections/Locations'
import { Volunteers } from './collections/Volunteers'
import { Guests } from './collections/Guests'
import { Activities } from './collections/Activities'
import { Schedule } from './collections/Schedule'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Roles,
    Members,
    Initiatives,
    Meetings,
    Ninjas,
    Mentors,
    FestivalEditions,
    FestivalSections,
    Locations,
    Volunteers,
    Guests,
    Activities,
    Schedule,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload-db.sqlite',
    },
  }),
  sharp,
  plugins: [],
})
