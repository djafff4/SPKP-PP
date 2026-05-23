import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'spkp_pp',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Basic check to see if we have at least a user and database name
if (!process.env.DB_USER || !process.env.DB_NAME) {
  console.warn("Database credentials missing in environment variables. Connection might fail.");
}

export default pool;
