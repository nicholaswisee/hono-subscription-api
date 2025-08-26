import { pgTable, serial, varchar, integer, date, pgEnum } from "drizzle-orm/pg-core";
import { UserTable } from "./user";

export const currencyEnum = pgEnum("currency", ["USD", "EUR", "IDR"]);
export const frequencyEnum = pgEnum("frequency", ["weekly", "monthly", "yearly"]);
export const categoryEnum = pgEnum("category", ["Sports", "Entertainment", "Health", "Education", "Technology"]);
export const statusEnum = pgEnum("status", ["active", "expired", "canceled"]);

export const SubscriptionTable = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  price: integer("price").notNull(),
  currency: currencyEnum("currency").default("USD").notNull(),
  frequency: frequencyEnum("frequency").default("monthly").notNull(),
  category: categoryEnum("category").notNull(),
  paymentMethod: varchar("payment_method", { length: 255 }).notNull(),
  status: statusEnum("status").default("active").notNull(),
  startDate: date("start_date").notNull(),
  renewalDate: date("renewal_date").notNull(),
  userId: integer("user_id").notNull().references(() => UserTable.id),
});