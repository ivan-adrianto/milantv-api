require('dotenv').config();

const {
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_NAME
} = process.env;

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "dialectModule": require('mysql2')
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "dialectModule": require('mysql2')
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "dialectModule": require('mysql2')
  }
}
