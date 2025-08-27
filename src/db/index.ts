import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as userSchema from "./user";
import * as subscriptionSchema from "./subscription";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle(pool, {
  schema: {
    ...userSchema,
    ...subscriptionSchema,
  },
  logger: true,
});

export type Database = typeof db;

export * from "./user";
export * from "./subscription";