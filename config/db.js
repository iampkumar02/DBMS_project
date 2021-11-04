var mysql = require('mysql');
var client = mysql.createConnection({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DB,
    password: process.env.PSQL_PASS,
    port: 3306,
});
module.exports = client;