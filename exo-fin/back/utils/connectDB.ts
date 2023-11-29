const mongoose = require('mongoose')
import {configDotenv} from 'dotenv'

configDotenv();
const databasePort = process.env.DATABASE_PORT
const databaseName = process.env.DATABASE_NAME
export function connectDB() {
  mongoose
    .connect(
      `mongodb://localhost:${databasePort}/${databaseName}`
    )
    .then(() => {
      console.log('Connected to database')
    })
    .catch((err: any) => {
      console.log(`Failed to connect to database: ${err}`)
      console.log(err)
    })
}
