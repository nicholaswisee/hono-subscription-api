import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/drizzle",
  dialect: "postgresql",
  schema: "./src/db",       // Points to folder
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
