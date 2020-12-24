const pgp = require('pg-promise')();

// it's not dangerous -- access to db is available only from localhost
const weatherDB = pgp('postgres://postgres:postgres@localhost:5432/postgres')


module.exports = weatherDB;