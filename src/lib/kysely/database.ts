import { Database } from './types' // this is the Database interface we defined earlier
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely';
import { databaseUser, databasePort, databaseHost, database } from "../../config";

console.log(database);
console.log(databaseHost);
console.log(databasePort);
console.log(databaseUser)

const dialect = new PostgresDialect({
  pool: new Pool({
    database,
    host: databaseHost,
    user: databaseUser,
    port: parseInt(databasePort),
    max: 10,
  })
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
})