import { sqliteAdapter } from '@payloadcms/db-sqlite'
import sharp from 'sharp'
import path from 'path'
import { buildConfig } from 'payload'
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

// ES module fix
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// transformăm path Windows în file:// URL
const dbPath = path.resolve(dirname, '../payload.db')
const dbURL = pathToFileURL(dbPath).href


export default buildConfig({
  admin: {
    user: Users.slug,
  },
  db: sqliteAdapter({
    client: {
      url: dbURL, // folosește URL-ul file://
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
  plugins: [], // dezactivăm plugin-urile ca să nu dea InvalidFieldRelationship
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  secret: '3110', // temporar pentru migrare
})


