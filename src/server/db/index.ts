import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '@/env';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

const client = postgres(env.DATABASE_URL, { max: 1 });
const db = drizzle(client, { schema });

const migrateDB = async () => {
  try {
    console.log('Migrating client');
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log('Successfully Migrated');
  } catch (error) {
    console.error('Error Migrating client');
  }
};
migrateDB();

export default db;
