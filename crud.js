//package requirements
const mysql = require('mysql');

//connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8888,
    user: 'root',
    password: '12345678',
    database: 'employeeDB'
});