import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("todo", {
  id: integer("id").primaryKey(),
  name: text("text").notNull(),
});