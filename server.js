//package requirements
const mysql = require('mysql');
const inquirer = require('inquirer');

//connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
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
        addDepartment();
      }
      else if (response.action === "add role") {
        console.log("Hey add role");
        addRole();
      }
      else if (response.action === "add employee") {
        console.log("Hey add employee");
        createEmployee();
      }
      else if (response.action === "view department") {
        console.log("Hey add view department");
        viewDepartment();
      }
      else if(response.action=== "update employee role"){
        console.log("Hey add a employee role")
      }
    })

  };


const viewDepartment = () => {
    console.log('Selecting departments...\n');
    connection.query('SELECT * FROM department', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };

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

const updateEmployee = () => {
    console.log('Updating employee by id\n');
    inquirer
      .prompt([
        {
          name: 'roleId',
          type: 'input',
          message: 'What is the role id of who you would like to update?'
        }
      ])
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

const addRole = ()=> {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'What role would you like to add'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary?'
      },
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          title: answer.title,
          salary: answer.salary
        },
        (err) => {
          if (err) throw err;
          console.log('You have been added to the employee database');
          // re-prompt the user for if they want to do anything else
          init();
        }
      )
    })
}

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the department?'
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          department_name: answer.department_name
        },
        (err) => {
          if (err) throw err;
          console.log('You have been added to the employee database');
          // re-prompt the user for if they want to do anything else
          init();
        }
      )
    })
}

const createEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'What is your first name'
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'What is your last name'
      },
      {
        name: 'roleId',
        type: 'number',
       message: 'What is your role(number)?'
      },
      {
        name: 'managerId',
        type: 'number',
        message: 'What is your manager Id number?'
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        (err) => {
          if (err) throw err;
          console.log('You have been added to the employee database');
          // re-prompt the user for if they want to do anything else
          init();
        }
      )
    })
}