export const port = process.env.PORT ?? 8000;
export const secret = `${process.env.SECRET ?? "secret"}`;
export const databaseURL = process.env.DATABASE_URL ?? "postgresql://postgres@localhost:5432/postgres";
export const environment: string = process.env.NODE_ENV ?? "development";
export const databaseHost = process.env?.DATABASE_HOST ?? "localhost";
export const databaseUser = process.env?.DATABASE_USER ?? "postgres";
export const databasePort = process.env?.DATABASE_PORT ?? "5432";
export const database = process.env?.DATABASE_NAME ?? "postgres";