import { Client } from 'pg'
 
const client = new Client({
connectionString : "postgresql://testdb_owner:1iIW5fFrJYdX@ep-solitary-limit-a1fin1qz.ap-southeast-1.aws.neon.tech/testdb?sslmode=require"
})

client.connect()