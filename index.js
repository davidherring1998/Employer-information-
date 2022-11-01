const inquirer = require('inquirer');
const fs = require('fs');

// employee class 
class Employee{
  constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email; 
    this.role = 'employee';
  }
}
// manager class 
class Manager extends Employee {
  constructor(name, id, email, role, officeNum){
    super(name, id, email, role);
    this.officeNum = officeNum;
    this.role = role;
  }
}
// engineer class
class Engineer extends Employee {
  constructor(name, id, email, role, github){ 
    super(name, id, email, role)
    this.github = github;
    this.role = role;
  }
}
// intern class
class Intern extends Employee {
  constructor(name, id, email, role, school){ 
    super(name, id, email, role)
    this.school= school;
  }
}

const jack = new Employee  ('jack', 01, 'email1')
console.log(jack);

const man = new Manager ('man', 002, 'email2', 'manager', 001)
console.log(man)

const eng = new Engineer ('end', 003, 'email3', 'eng', 'github')
console.log(eng)

const int = new Intern ('int', 004, 'email4', 'int', 'school')
console.log(int)