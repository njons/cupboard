// ESTABLISH A CONNECTION TO DATABASE: node cannot just run sql so we will need to connect to the database here and run the code to build the datbase in yet another file

// what do we need to establish a connection with the database?
const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

let DB_URL = process.env.DB_URL;

if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
}

console.log("this is DB_URL:", DB_URL);
// make sure there is a DB_URL
if (!process.env.DB_URL)
  throw new Error("DB_URL environment variable must be set");

// break down the DB_URL into params to populate the options object
const params = url.parse(DB_URL);
// get the username and password from the DB_URL
const [username, password] = params.auth.split(":");

// fill the options object with info importnat to establish a connection with the db
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_URL_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};
