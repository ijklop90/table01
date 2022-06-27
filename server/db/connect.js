const mysql = require('mysql2')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'kalima90'
})



module.exports = connect;