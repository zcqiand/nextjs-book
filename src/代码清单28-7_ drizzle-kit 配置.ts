import { defineConfig } from "drizzle-kit";

const pgHost = process.env.PG_HOST ?? "100.79.128.25";
const pgPort = Number(process.env.PG_PORT ?? 5432);
const pgUser = process.env.PG_USER ?? "postgres";
const pgPassword = process.env.PG_PASSWORD ?? "";
const pgDatabase = process.env.PG_DATABASE ?? "lab_dev";

export default defineConfig({
  dialect: "postgresql",
  schemaFilter: ["public"],
  dbCredentials: {
    host: pgHost,
    port: pgPort,
    user: pgUser,
    password: pgPassword,
    database: pgDatabase,
    ssl: false,
  },
  verbose: true,
  strict: true,
});