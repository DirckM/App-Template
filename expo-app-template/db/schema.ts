import { pgTable, uuid, text, timestamp, date } from 'drizzle-orm/pg-core';

// Profile table

//NOTE: ALL THE NAMES SHOULD BE SNAKE_CASE TO MATCH THE DATABASE SCHEMA
// This is a Drizzle ORM table definition for the 'profiles' table.

//So this line sets up a namespace-like object for working with tables inside `auth`.
//Since the `auth` schema is where the `users` table is located, we can use this to reference it.
export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  username: text('username').unique(),
  firstname: text('firstname'),
  lastname: text('lastname'),
  bio: text('bio'),
  profile_image_url: text('profile_image_url'),
  country: text('country'),
  date_of_birth: date('date_of_birth'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// Export types
export type Profile = typeof profiles.$inferSelect;
