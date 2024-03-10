//31:00
require("dotenv").config();

const {Pool} = require ("pg");



const isProduction = process.env.NODE_ENV === "production";

//32:30
/*
const connectionString = 
`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
*/

//34:21
/*
const pool = new Pool({
connectionString: isProduction ? process.env.DATABASE_URL : connectionString
});
*/
const pool = new Pool({
    user: 'postgres', // Your PostgreSQL username
    host: 'localhost', // Your PostgreSQL server host
    database: 'nodelogin', // Your PostgreSQL database name
    password: 'test', // Your PostgreSQL password
    port: 5432, // Your PostgreSQL server port
  });

module.exports = {pool};