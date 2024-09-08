const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.username,
    password: config.mysql.password,
    database: config.mysql.database
};

let connection;

function connectionMySQL() {
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
        if (err) {
            console.error('[ERROR CONNECTION]', err);
            setTimeout(connectionMySQL, 200);
        } else {
            console.info("Database connected successfully!");
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connectionMySQL();
        } else {
            throw err;
        }
    });
}

connectionMySQL();

module.exports = connection;