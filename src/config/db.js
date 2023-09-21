require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DATABASE || "students",
  password: process.env.POSTGRES_PASSWORD || "arun",
  port: process.env.POSTGRES_PORT ||8000,
});

module.exports = pool;
