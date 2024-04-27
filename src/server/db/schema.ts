import { sql } from 'drizzle-orm';
import {
  date,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name').notNull(),
  email: text('email').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').default(sql`current_timestamp`),
});

export const transactionsTypeEnum = pgEnum('type', ['income', 'expense']);

export const transactions = pgTable('transactions', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  categoryId: uuid('category_id').references(() => categories.id, {
    onDelete: 'cascade',
  }),
  description: varchar('description'),
  amount: numeric('amount', { precision: 10, scale: 2 }),
  date: date('date'),
  type: transactionsTypeEnum('type').default('income'),
  icon: varchar('icon'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').default(sql`current_timestamp`),
});

export const budgets = pgTable('budgets', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  categoryId: uuid('category_id').references(() => categories.id, {
    onDelete: 'cascade',
  }),
  budgetAmount: numeric('budget_amount', { precision: 10, scale: 2 }),
  startDate: date('start_date'),
  endDate: date('end_date'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').default(sql`current_timestamp`),
});

export const goals = pgTable('goals', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  description: varchar('description'),
  targetAmount: numeric('target_amount', { precision: 10, scale: 2 }),
  startDate: date('start_date'),
  endDate: date('end_date'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').default(sql`current_timestamp`),
});
