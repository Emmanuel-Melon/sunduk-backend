import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { databaseURL } from "../../config";
import { Client } from "pg";

const client = new Client({
    connectionString: databaseURL,
  });

const connect = async(databaseURL: string) => {
    await client.connect();
    const db = drizzle(client);
    
    // client.connect()
    return client;
  };