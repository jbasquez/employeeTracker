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

const readEmployee = () => {
    console.log('Selecting employees...\n');
    connection.query('SELECT * FROM employee', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };

const deleteEmployee = () => {
    console.log('Deleting employee by id\n');
    connection.query(
      'DELETE FROM employee WHERE ?',
      {
        role_id: 2,
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} deleted!\n`);
        // Call readEmployee AFTER the DELETE completes
        readEmployee();
      }
    );
  };

const updateEmployee = () => {
    console.log('Updating employee by id\n');
    const query = connection.query(
      'UPDATE employee SET ? WHERE ?',
      [
        {
          role_id: 50,
        },
        {
          first_name: 'Rocky',
        },
      ],
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} products updated!\n`);
        // Call deleteProduct AFTER the UPDATE completes
        deleteEmployee();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  };

const createEmployee = () => {
    console.log('Creating new employee \n');
    const query = connection.query(
        //
      'INSERT INTO employee SET ?',
      {
        first_name: 'jack',
        last_name: 'Rocky',
        role_id: 50,
        manager_id: 50
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
        // Call updateProduct AFTER the INSERT completes
        updateEmployee();
      }
    )};