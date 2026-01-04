import { sql } from 'drizzle-orm';
import { Migration } from 'payload';

export const InitialMigration: Migration = {
  name: '0001_initial_migration',
  async up(drizzle) {
    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "roles" (
        "id" serial PRIMARY KEY,
        "name" varchar(255) NOT NULL UNIQUE,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "_users_roles" (
        "users_id" integer NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
        "roles_id" integer NOT NULL REFERENCES "roles"("id") ON DELETE CASCADE,
        PRIMARY KEY ("users_id", "roles_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "members" (
        "id" serial PRIMARY KEY,
        "user_id" integer UNIQUE REFERENCES "users"("id") ON DELETE SET NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "initiatives" (
        "id" serial PRIMARY KEY,
        "title" varchar,
        "description" text,
        "image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
        "site_link" varchar,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "initiative_id" integer REFERENCES "initiatives"("id") ON DELETE SET NULL;
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "initiatives_members" (
        "initiatives_id" integer NOT NULL REFERENCES "initiatives"("id") ON DELETE CASCADE,
        "members_id" integer NOT NULL REFERENCES "members"("id") ON DELETE CASCADE,
        PRIMARY KEY ("initiatives_id", "members_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "meetings" (
        "id" serial PRIMARY KEY,
        "title" varchar NOT NULL,
        "date" timestamp with time zone NOT NULL,
        "venue" varchar NOT NULL,
        "type" varchar,
        "workshop_topic" varchar,
        "presenter_id" integer REFERENCES "members"("id") ON DELETE SET NULL,
        "discussion_agenda" text,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "ninjas" (
        "id" serial PRIMARY KEY,
        "child_name" varchar,
        "age" integer,
        "useful_info" text,
        "guardian_name" varchar,
        "guardian_email" varchar,
        "guardian_phone" varchar,
        "safety_agreement" boolean DEFAULT false NOT NULL,
        "photo_release_agreement" boolean DEFAULT false NOT NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "mentors" (
        "id" serial PRIMARY KEY,
        "name" varchar,
        "bio" text,
        "photo_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
        "user_account_id" integer UNIQUE REFERENCES "users"("id") ON DELETE SET NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "dojosessions" (
        "id" serial PRIMARY KEY,
        "title" varchar NOT NULL,
        "date" timestamp with time zone NOT NULL,
        "location" varchar,
        "description" text,
        "max_capacity" integer,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "dojosessions_ninjas" (
        "dojosessions_id" integer NOT NULL REFERENCES "dojosessions"("id") ON DELETE CASCADE,
        "ninjas_id" integer NOT NULL REFERENCES "ninjas"("id") ON DELETE CASCADE,
        "checked_in" boolean DEFAULT false,
        PRIMARY KEY ("dojosessions_id", "ninjas_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "dojosessions_mentors" (
        "dojosessions_id" integer NOT NULL REFERENCES "dojosessions"("id") ON DELETE CASCADE,
        "mentors_id" integer NOT NULL REFERENCES "mentors"("id") ON DELETE CASCADE,
        "role" varchar,
        PRIMARY KEY ("dojosessions_id", "mentors_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "festival_editions" (
        "id" serial PRIMARY KEY,
        "year" integer NOT NULL,
        "title" varchar NOT NULL,
        "theme" varchar,
        "description" text,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "festival_sections" (
        "id" serial PRIMARY KEY,
        "edition_id" integer REFERENCES "festival_editions"("id") ON DELETE CASCADE,
        "name" varchar,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "locations" (
        "id" serial PRIMARY KEY,
        "edition_id" integer REFERENCES "festival_editions"("id") ON DELETE CASCADE,
        "name" varchar,
        "address" varchar,
        "coordinates" text,
        "description" text,
        "floor_plan_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
        "capacity" integer,
        "facilities" text[],
        "coordinator_id" integer UNIQUE REFERENCES "volunteers"("id") ON DELETE SET NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "locations_media" (
        "locations_id" integer NOT NULL REFERENCES "locations"("id") ON DELETE CASCADE,
        "media_id" integer NOT NULL REFERENCES "media"("id") ON DELETE CASCADE,
        PRIMARY KEY ("locations_id", "media_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "guests" (
        "id" serial PRIMARY KEY,
        "edition_id" integer REFERENCES "festival_editions"("id") ON DELETE CASCADE,
        "name" varchar,
        "organization" varchar,
        "guest_type" text[],
        "bio" text,
        "photo_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
        "website" varchar,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "volunteers" (
        "id" serial PRIMARY KEY,
        "edition_id" integer REFERENCES "festival_editions"("id") ON DELETE CASCADE,
        "name" varchar,
        "photo_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
        "organization" varchar,
        "birth_date" date,
        "phone" varchar,
        "agreement_document_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
        "coordinator_id" integer REFERENCES "members"("id") ON DELETE SET NULL,
        "user_account_id" integer UNIQUE REFERENCES "users"("id") ON DELETE SET NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "activities" (
        "id" serial PRIMARY KEY,
        "edition_id" integer REFERENCES "festival_editions"("id") ON DELETE CASCADE,
        "title" varchar,
        "description" text,
        "type" varchar,
        "audience" text[],
        "section_id" integer REFERENCES "festival_sections"("id") ON DELETE SET NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "activities_guests" (
        "activities_id" integer NOT NULL REFERENCES "activities"("id") ON DELETE CASCADE,
        "guests_id" integer NOT NULL REFERENCES "guests"("id") ON DELETE CASCADE,
        PRIMARY KEY ("activities_id", "guests_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "activities_volunteers" (
        "activities_id" integer NOT NULL REFERENCES "activities"("id") ON DELETE CASCADE,
        "volunteers_id" integer NOT NULL REFERENCES "volunteers"("id") ON DELETE CASCADE,
        "assigned_role" varchar,
        PRIMARY KEY ("activities_id", "volunteers_id")
      );
    `);

    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "schedule" (
        "id" serial PRIMARY KEY,
        "edition_id" integer REFERENCES "festival_editions"("id") ON DELETE CASCADE,
        "start_time" timestamp with time zone,
        "end_time" timestamp with time zone,
        "activity_id" integer REFERENCES "activities"("id") ON DELETE SET NULL,
        "location_id" integer REFERENCES "locations"("id") ON DELETE SET NULL,
        "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
      );
    `);
  },

  async down(drizzle) {
    await drizzle.execute(sql`DROP TABLE IF EXISTS "schedule";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "activities_volunteers";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "activities_guests";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "activities";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "volunteers";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "guests";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "locations_media";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "locations";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "festival_sections";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "festival_editions";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "dojosessions_mentors";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "dojosessions_ninjas";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "dojosessions";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "mentors";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "ninjas";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "meetings";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "initiatives_members";`);
    await drizzle.execute(sql`ALTER TABLE "posts" DROP COLUMN IF EXISTS "initiative_id";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "initiatives";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "members";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "_users_roles";`);
    await drizzle.execute(sql`DROP TABLE IF EXISTS "roles";`);
  },
};