import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { databaseURL } from "./config";
const sql = neon(databaseURL);
const db = drizzle(sql);
export default db;