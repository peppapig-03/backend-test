import dotenv from "dotenv"
import pg from "pg"

dotenv.config()

console.log("HOST:", new URL(process.env.DATABASE_URL).hostname)

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

pool.query("SELECT version()")
  .then(res => {
    console.log("CONNECTED")
    console.log(res.rows[0])
  })
  .catch(err => {
    console.error("FAILED")
    console.error(err.code)
    console.error(err.message)
  })