var mysql = require('mysql');
var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mylocaldb',
    port: 3333,
});
module.exports = client;