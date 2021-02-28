//package requirements
const mysql = require('mysql');
const inquirer = require('inquirer');

//connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8888,
    user: 'root',
    password: '12345678',
    database: 'employeeDB'
});

const list =[
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ["add department, role or employee", "view department", "update employee role"],
        name: 'action'
    }
]