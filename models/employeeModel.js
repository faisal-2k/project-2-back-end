// EmployeesModel.js
const connectDB = require('../utils/db');

async function getCount() {
    const db = await connectDB("AlSalam");
    const employeess = db.collection('Employees'); 
    const count = await employeess.countDocuments();
    return count;
}

async function createEmployee(data) {  
    const db = await connectDB("AlSalam");
    const employeess = db.collection('Employees');
    return employeess.insertOne(data);
}

async function getEmployees() {
    const query = {}; 
    const options = {};
    const db = await connectDB("AlSalam");
    const employeess = db.collection('Employees');
    const employeesArray = await employeess.find(query, options).toArray(); 
    return employeesArray;
}
async function getEmployee(name) {
    const query = {name : {$regex :name}};    
    const db = await connectDB("AlSalam");
    const employeess = db.collection('Employees');
    const employee = employeess.findOne(query);
    return employee;
}
async function findEmployee(email) {
    const query = {email : email};    
    const db = await connectDB("AlSalam");
    const employees = db.collection('Employees');
    const employee = employees.findOne(query);
    return employee;
}
async function removeEmployee(email) {
    const query = {email : email};    
    const db = await connectDB("AlSalam");
    const employeess = db.collection('Employees');
    const employeesArray = employeess.deleteOne(query);
    return employeesArray;
}

async function updateProfile(employee_id, data) {
    const filter = {employee_id : employee_id}; 
    const updateDocument = {
        $set :  data,
      } 
    const db = await connectDB("AlSalam");
    const users = db.collection(`Employees`);
    const result = await users.updateOne(filter, updateDocument);      
    return result;
}
async function updateBalance(employee_id, data) {
    const filter = {employee_id : employee_id}; 
    const updateDocument = {
        $set : data,
      } 
    const db = await connectDB("AlSalam");
    const users = db.collection(`Employees`);
    const result = await users.updateOne(filter, updateDocument);      
    return result;
}


module.exports = {getCount, createEmployee, getEmployee, findEmployee, getEmployees, removeEmployee, updateProfile, updateBalance };
