import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-sqlite'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  // Initial migration
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  // Rollback initial migration
}

