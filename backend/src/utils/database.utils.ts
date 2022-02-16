import { createPool, PoolConnection } from 'mysql2/promise'

// Database connection. Can use config from .env file (based on example.env) or the defaults

export async function connect (): Promise<PoolConnection> {
  const connection = await createPool({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
    namedPlaceholders: true
  })
  return connection.getConnection()
}
