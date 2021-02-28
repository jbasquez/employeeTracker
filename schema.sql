DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE epmloyeeDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL
  PRIMARY KEY (position)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  salary Decimal(10,2)
);


SELECT * FROM top5000;