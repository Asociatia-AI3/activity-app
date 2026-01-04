import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`users_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`roles_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`roles_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_rels_order_idx\` ON \`users_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_parent_idx\` ON \`users_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_path_idx\` ON \`users_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_roles_id_idx\` ON \`users_rels\` (\`roles_id\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`roles\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`roles_name_idx\` ON \`roles\` (\`name\`);`)
  await db.run(sql`CREATE INDEX \`roles_updated_at_idx\` ON \`roles\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`roles_created_at_idx\` ON \`roles\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`members\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`user_account_id\` integer,
  	\`status\` text DEFAULT 'aspirant',
  	\`type\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`user_account_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`members_user_account_idx\` ON \`members\` (\`user_account_id\`);`)
  await db.run(sql`CREATE INDEX \`members_updated_at_idx\` ON \`members\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`members_created_at_idx\` ON \`members\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`initiatives\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`image_id\` integer,
  	\`site_link\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`initiatives_image_idx\` ON \`initiatives\` (\`image_id\`);`)
  await db.run(sql`CREATE INDEX \`initiatives_updated_at_idx\` ON \`initiatives\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`initiatives_created_at_idx\` ON \`initiatives\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`meetings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`date\` text NOT NULL,
  	\`venue\` text NOT NULL,
  	\`type\` text,
  	\`workshop_topic\` text,
  	\`presenter_id\` integer,
  	\`discussion_agenda\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`presenter_id\`) REFERENCES \`members\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`meetings_presenter_idx\` ON \`meetings\` (\`presenter_id\`);`)
  await db.run(sql`CREATE INDEX \`meetings_updated_at_idx\` ON \`meetings\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`meetings_created_at_idx\` ON \`meetings\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`ninjas\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`child_name\` text,
  	\`age\` numeric,
  	\`useful_info\` text,
  	\`guardian_name\` text,
  	\`guardian_email\` text,
  	\`guardian_phone\` text,
  	\`safety_agreement\` integer DEFAULT false NOT NULL,
  	\`photo_release_agreement\` integer DEFAULT false NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`ninjas_updated_at_idx\` ON \`ninjas\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`ninjas_created_at_idx\` ON \`ninjas\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`mentors\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`bio\` text,
  	\`photo_id\` integer,
  	\`user_account_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`user_account_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`mentors_photo_idx\` ON \`mentors\` (\`photo_id\`);`)
  await db.run(sql`CREATE INDEX \`mentors_user_account_idx\` ON \`mentors\` (\`user_account_id\`);`)
  await db.run(sql`CREATE INDEX \`mentors_updated_at_idx\` ON \`mentors\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`mentors_created_at_idx\` ON \`mentors\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`festival_editions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`year\` numeric NOT NULL,
  	\`title\` text NOT NULL,
  	\`theme\` text,
  	\`description\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`festival_editions_updated_at_idx\` ON \`festival_editions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`festival_editions_created_at_idx\` ON \`festival_editions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`festival_sections\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`edition_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`festival_sections_edition_idx\` ON \`festival_sections\` (\`edition_id\`);`)
  await db.run(sql`CREATE INDEX \`festival_sections_updated_at_idx\` ON \`festival_sections\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`festival_sections_created_at_idx\` ON \`festival_sections\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`volunteers\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`edition_id\` integer,
  	\`photo_id\` integer,
  	\`organization\` text,
  	\`birth_date\` text,
  	\`phone\` text,
  	\`agreement_document_id\` integer,
  	\`coordinator_id\` integer,
  	\`user_account_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`agreement_document_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`coordinator_id\`) REFERENCES \`members\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`user_account_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`volunteers_edition_idx\` ON \`volunteers\` (\`edition_id\`);`)
  await db.run(sql`CREATE INDEX \`volunteers_photo_idx\` ON \`volunteers\` (\`photo_id\`);`)
  await db.run(sql`CREATE INDEX \`volunteers_agreement_document_idx\` ON \`volunteers\` (\`agreement_document_id\`);`)
  await db.run(sql`CREATE INDEX \`volunteers_coordinator_idx\` ON \`volunteers\` (\`coordinator_id\`);`)
  await db.run(sql`CREATE INDEX \`volunteers_user_account_idx\` ON \`volunteers\` (\`user_account_id\`);`)
  await db.run(sql`CREATE INDEX \`volunteers_updated_at_idx\` ON \`volunteers\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`volunteers_created_at_idx\` ON \`volunteers\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`locations_facilities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tag\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`locations\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`locations_facilities_order_idx\` ON \`locations_facilities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`locations_facilities_parent_id_idx\` ON \`locations_facilities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`locations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`edition_id\` integer,
  	\`address\` text,
  	\`coordinates_latitude\` numeric,
  	\`coordinates_longitude\` numeric,
  	\`description\` text,
  	\`floor_plan_id\` integer,
  	\`capacity\` numeric,
  	\`coordinator_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`floor_plan_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`coordinator_id\`) REFERENCES \`volunteers\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`locations_edition_idx\` ON \`locations\` (\`edition_id\`);`)
  await db.run(sql`CREATE INDEX \`locations_floor_plan_idx\` ON \`locations\` (\`floor_plan_id\`);`)
  await db.run(sql`CREATE INDEX \`locations_coordinator_idx\` ON \`locations\` (\`coordinator_id\`);`)
  await db.run(sql`CREATE INDEX \`locations_updated_at_idx\` ON \`locations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`locations_created_at_idx\` ON \`locations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`locations_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`locations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`locations_rels_order_idx\` ON \`locations_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`locations_rels_parent_idx\` ON \`locations_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`locations_rels_path_idx\` ON \`locations_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`locations_rels_media_id_idx\` ON \`locations_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE TABLE \`guests_guest_type\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`guests\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`guests_guest_type_order_idx\` ON \`guests_guest_type\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`guests_guest_type_parent_idx\` ON \`guests_guest_type\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`guests\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`edition_id\` integer,
  	\`organization\` text,
  	\`bio\` text,
  	\`photo_id\` integer,
  	\`website\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`guests_edition_idx\` ON \`guests\` (\`edition_id\`);`)
  await db.run(sql`CREATE INDEX \`guests_photo_idx\` ON \`guests\` (\`photo_id\`);`)
  await db.run(sql`CREATE INDEX \`guests_updated_at_idx\` ON \`guests\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`guests_created_at_idx\` ON \`guests\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`activities_audience\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`activities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`activities_audience_order_idx\` ON \`activities_audience\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`activities_audience_parent_idx\` ON \`activities_audience\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`activities\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`edition_id\` integer,
  	\`description\` text,
  	\`type\` text,
  	\`section_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`section_id\`) REFERENCES \`festival_sections\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`activities_edition_idx\` ON \`activities\` (\`edition_id\`);`)
  await db.run(sql`CREATE INDEX \`activities_section_idx\` ON \`activities\` (\`section_id\`);`)
  await db.run(sql`CREATE INDEX \`activities_updated_at_idx\` ON \`activities\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`activities_created_at_idx\` ON \`activities\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`activities_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`guests_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`activities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`guests_id\`) REFERENCES \`guests\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`activities_rels_order_idx\` ON \`activities_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`activities_rels_parent_idx\` ON \`activities_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`activities_rels_path_idx\` ON \`activities_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`activities_rels_guests_id_idx\` ON \`activities_rels\` (\`guests_id\`);`)
  await db.run(sql`CREATE TABLE \`schedule\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`edition_id\` integer,
  	\`start_time\` text,
  	\`end_time\` text,
  	\`activity_id\` integer,
  	\`location_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`edition_id\`) REFERENCES \`festival_editions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`activity_id\`) REFERENCES \`activities\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`location_id\`) REFERENCES \`locations\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`schedule_edition_idx\` ON \`schedule\` (\`edition_id\`);`)
  await db.run(sql`CREATE INDEX \`schedule_activity_idx\` ON \`schedule\` (\`activity_id\`);`)
  await db.run(sql`CREATE INDEX \`schedule_location_idx\` ON \`schedule\` (\`location_id\`);`)
  await db.run(sql`CREATE INDEX \`schedule_updated_at_idx\` ON \`schedule\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`schedule_created_at_idx\` ON \`schedule\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
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
  	\`volunteers_id\` integer,
  	\`locations_id\` integer,
  	\`guests_id\` integer,
  	\`activities_id\` integer,
  	\`schedule_id\` integer,
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
  	FOREIGN KEY (\`volunteers_id\`) REFERENCES \`volunteers\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`locations_id\`) REFERENCES \`locations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`guests_id\`) REFERENCES \`guests\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`activities_id\`) REFERENCES \`activities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`schedule_id\`) REFERENCES \`schedule\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
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
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_volunteers_id_idx\` ON \`payload_locked_documents_rels\` (\`volunteers_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_locations_id_idx\` ON \`payload_locked_documents_rels\` (\`locations_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_guests_id_idx\` ON \`payload_locked_documents_rels\` (\`guests_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_activities_id_idx\` ON \`payload_locked_documents_rels\` (\`activities_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_schedule_id_idx\` ON \`payload_locked_documents_rels\` (\`schedule_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`users_rels\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`roles\`;`)
  await db.run(sql`DROP TABLE \`members\`;`)
  await db.run(sql`DROP TABLE \`initiatives\`;`)
  await db.run(sql`DROP TABLE \`meetings\`;`)
  await db.run(sql`DROP TABLE \`ninjas\`;`)
  await db.run(sql`DROP TABLE \`mentors\`;`)
  await db.run(sql`DROP TABLE \`festival_editions\`;`)
  await db.run(sql`DROP TABLE \`festival_sections\`;`)
  await db.run(sql`DROP TABLE \`volunteers\`;`)
  await db.run(sql`DROP TABLE \`locations_facilities\`;`)
  await db.run(sql`DROP TABLE \`locations\`;`)
  await db.run(sql`DROP TABLE \`locations_rels\`;`)
  await db.run(sql`DROP TABLE \`guests_guest_type\`;`)
  await db.run(sql`DROP TABLE \`guests\`;`)
  await db.run(sql`DROP TABLE \`activities_audience\`;`)
  await db.run(sql`DROP TABLE \`activities\`;`)
  await db.run(sql`DROP TABLE \`activities_rels\`;`)
  await db.run(sql`DROP TABLE \`schedule\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
