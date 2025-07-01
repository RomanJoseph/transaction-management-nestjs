import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? 5432,
    username: process.env.DB_USER ?? 'load_scheduling',
    password: process.env.DB_PASSWORD ?? 'load_scheduling',
    database: process.env.DB_DATABASE ?? 'load_scheduling',
  },
};
