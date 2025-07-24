import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema';

// For client-side usage, we'll use the public Supabase client
// The database URL is only needed for migrations and server-side operations
const databaseUrl = process.env.SUPABASE_DATABASE_URL || '';

const client = postgres(databaseUrl, {
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10,
});

export const db = drizzle(client, { schema });
export * from './schema';
