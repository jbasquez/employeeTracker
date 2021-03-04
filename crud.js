//package requirements
const mysql = require('mysql');
const inquirer = require('inquirer');

//connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: '12345678',
    database: 'employeeDB'
});
connection.connect(function(err) {
  if (err) throw err;
  console.log('connection made');
  init();
  // connected! (unless `err` is set)
});

function init() {
  const list =[
      {
          type: 'list',
          message: 'What would you like to do?',
          choices: ["add department", "add role", "add employee", "view department", "update employee role"],
          name: 'action'
      }
  ]
  console.clear();
  inquirer
    .prompt(list)
    .then(function(response) {
      if (response.action === "add department") {
        console.log("Hey add department");
      }
      else if (response.action === "add role") {
        console.log("Hey add role");
      }
      else if (response.action === "add employee") {
        console.log("Hey add employee");
      }
      else if (response.action === "view department") {
        console.log("Hey add view department");
      }
      else if(response.action=== "update employee role"){
        console.log("Hey add a employee role")
      }
    })

  };


// const readEmployee = () => {
//     console.log('Selecting employees...\n');
//     connection.query('SELECT * FROM employee', (err, res) => {
//       if (err) throw err;
//       // Log all results of the SELECT statement
//       console.log(res);
//       connection.end();
//     });
//   };

// const deleteEmployee = () => {
//     console.log('Deleting employee by id\n');
//     connection.query(
//       'DELETE FROM employee WHERE ?',
//       {
//         role_id: 2,
//       },
//       (err, res) => {
//         if (err) throw err;
//         console.log(`${res.affectedRows} deleted!\n`);
//         // Call readEmployee AFTER the DELETE completes
//         readEmployee();
//       }
//     );
//   };

// const updateEmployee = () => {
//     console.log('Updating employee by id\n');
//     const query = connection.query(
//       'UPDATE employee SET ? WHERE ?',
//       [
//         {
//           role_id: 50,
//         },
//         {
//           first_name: 'Rocky',
//         },
//       ],
//       (err, res) => {
//         if (err) throw err;
//         console.log(`${res.affectedRows} products updated!\n`);
//         // Call deleteProduct AFTER the UPDATE completes
//         deleteEmployee();
//       }
//     );
  
//     // logs the actual query being run
//     console.log(query.sql);
//   };

// const createEmployee = () => {
//     console.log('Creating new employee \n');
//     const query = connection.query(
//         //
//       'INSERT INTO employee SET ?',
//       {
//         first_name: 'jack',
//         last_name: 'Rocky',
//         role_id: 50,
//         manager_id: 50
//       },
//       (err, res) => {
//         if (err) throw err;
//         console.log(`${res.affectedRows} product inserted!\n`);
//         // Call updateProduct AFTER the INSERT completes
//         updateEmployee();
//       }
//     )};}