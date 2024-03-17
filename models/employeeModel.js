// EmployeesModel.js
const connectDB = require('../utils/db');

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
    const employeesArray = employeess.find(query).toArray();
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
        $set :  {'balance': data},
      } 
    const db = await connectDB("AlSalam");
    const users = db.collection(`Employees`);
    const result = await users.updateOne(filter, updateDocument);      
    return result;
}


module.exports = { createEmployee, getEmployee, getEmployees, updateProfile, updateBalance };
