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

const createEmployee = () => {
    console.log('Creating new employee \n');
    const query = connection.query(
        //
      'INSERT INTO employee SET ?',
      {
        first_name: 'Rocky Road',
        last_name: 'Rocky',
        role_id: 50,
        manager_id: 50
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );