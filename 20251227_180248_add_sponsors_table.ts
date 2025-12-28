import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`sponsors\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`website\` text,
  	\`tier\` text,
  	\`logo_id\` integer,
  	\`festival_edition_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`festival_edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`sponsors_logo_idx\` ON \`sponsors\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`sponsors_festival_edition_idx\` ON \`sponsors\` (\`festival_edition_id\`);`)
  await db.run(sql`CREATE INDEX \`sponsors_updated_at_idx\` ON \`sponsors\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`sponsors_created_at_idx\` ON \`sponsors\` (\`created_at\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`sponsors_id\` integer REFERENCES sponsors(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_sponsors_id_idx\` ON \`payload_locked_documents_rels\` (\`sponsors_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`sponsors\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`roles_id\` integer,
  	\`members_id\` integer,
  	\`initiatives_id\` integer,
  	\`meetings_id\` integer,
  	\`ninjas_id\` integer,
  	\`mentors_id\` integer,
  	\`festival_editions_id\` integer,
  	\`festival_sections_id\` integer,
  	\`guests_id\` integer,
  	\`volunteers_id\` integer,
  	\`locations_id\` integer,
  	\`activities_id\` integer,
  	\`schedule_id\` integer,
  	\`feedbacks_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`roles_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`members_id\`) REFERENCES \`members\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`initiatives_id\`) REFERENCES \`initiatives\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`meetings_id\`) REFERENCES \`meetings\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`ninjas_id\`) REFERENCES \`ninjas\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`mentors_id\`) REFERENCES \`mentors\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`festival_editions_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`festival_sections_id\`) REFERENCES \`festival_sections\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`guests_id\`) REFERENCES \`guests\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`volunteers_id\`) REFERENCES \`volunteers\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`locations_id\`) REFERENCES \`locations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`activities_id\`) REFERENCES \`activities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`schedule_id\`) REFERENCES \`schedule\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`feedbacks_id\`) REFERENCES \`feedbacks\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id", "roles_id", "members_id", "initiatives_id", "meetings_id", "ninjas_id", "mentors_id", "festival_editions_id", "festival_sections_id", "guests_id", "volunteers_id", "locations_id", "activities_id", "schedule_id", "feedbacks_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id", "roles_id", "members_id", "initiatives_id", "meetings_id", "ninjas_id", "mentors_id", "festival_editions_id", "festival_sections_id", "guests_id", "volunteers_id", "locations_id", "activities_id", "schedule_id", "feedbacks_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_roles_id_idx\` ON \`payload_locked_documents_rels\` (\`roles_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_members_id_idx\` ON \`payload_locked_documents_rels\` (\`members_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_initiatives_id_idx\` ON \`payload_locked_documents_rels\` (\`initiatives_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_meetings_id_idx\` ON \`payload_locked_documents_rels\` (\`meetings_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_ninjas_id_idx\` ON \`payload_locked_documents_rels\` (\`ninjas_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_mentors_id_idx\` ON \`payload_locked_documents_rels\` (\`mentors_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_festival_editions_id_idx\` ON \`payload_locked_documents_rels\` (\`festival_editions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_festival_sections_id_idx\` ON \`payload_locked_documents_rels\` (\`festival_sections_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_guests_id_idx\` ON \`payload_locked_documents_rels\` (\`guests_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_volunteers_id_idx\` ON \`payload_locked_documents_rels\` (\`volunteers_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_locations_id_idx\` ON \`payload_locked_documents_rels\` (\`locations_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_activities_id_idx\` ON \`payload_locked_documents_rels\` (\`activities_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_schedule_id_idx\` ON \`payload_locked_documents_rels\` (\`schedule_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_feedbacks_id_idx\` ON \`payload_locked_documents_rels\` (\`feedbacks_id\`);`)
}
