const pgp = require('pg-promise')();

// it's not dangerous -- access to db is available only from localhost
const weatherDB = pgp('postgres://weatheruser:lerese58@192.168.56.57:5432/weather')


module.exports = weatherDB;