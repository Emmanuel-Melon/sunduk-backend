export const port = process.env.PORT ?? 8000;
export const secret = `${process.env.SECRET ?? "secret"}`;
export const databaseURL = process.env.DATABASE_URL ?? "postgresql://postgres@localhost:5432/postgres";
export const environment: string = process.env.NODE_ENV ?? "development";