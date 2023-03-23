const mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '6330539421',
    database: 'vacCenter'
});

module.exports = connection;