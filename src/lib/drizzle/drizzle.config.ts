import "dotenv/config";
import type {Config} from "drizzle-kit";
import { databaseURL } from "../../config";
export default {
  schema: "./db/drizzle.schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: databaseURL,
  },
} satisfies Config;