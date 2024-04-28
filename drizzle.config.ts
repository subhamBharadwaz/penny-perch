import { type Config } from 'drizzle-kit';

import { env } from '@/env';

export default {
  schema: './src/server/db/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
