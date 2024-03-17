// employeesController.js
const employeeModel = require('../models/employeeModel');

async function createEmployee(req, res) {
    const { name, email } = req.body;

    try {
        await employeeModel.createEmployee(name, email);
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function getEmployees(req, res) {
    try {
        const employees = await employeeModel.getEmployees();
        res.status(201).send(employees);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function getEmployee(req, res) {
    const name = req.params.name.toLowerCase();

    try {
        const employee = await employeeModel.getEmployee(name);
        res.status(201).send(employee);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function updateProfile(req, res) {
    const employee_id = parseInt(req.params.employee_id);
    const data = req.body.data;
    try {
        const employees = await employeeModel.updateProfile(employee_id, data);
        res.status(201).send(employees);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function updateBalance(req, res) {
    const employee_id = parseInt(req.params.employee_id);
    const data = req.body.data;
    try {
        const employees = await employeeModel.updateBalance(employee_id, data);
        res.status(201).send(employees);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = { createEmployee, getEmployees, getEmployee, updateProfile, updateBalance };
