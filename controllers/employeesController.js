// employeesController.js
const employeeModel = require('../models/employeeModel');

async function getCount(req, res) {
    // const company = req.params.company;
    try {
        const result = await employeeModel.getCount();
        res.status(200).json({'success' : true, 'result': result})
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function createEmployee(req, res) {
    const data = req.body;
    const email = data.email;
    try {
        // Checking
        const existingEmployee = await employeeModel.findEmployee(email);
        if (existingEmployee) {
            return res.status(400).send('Employee already exists!');
        }

        //creating
        await employeeModel.createEmployee(data);
        res.status(201).send('Employee created successfully');
    } catch (error) {
        console.error('Error creating employee:', error);
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
async function findEmployee(req, res) {
    const email = req.params.email;
    try {
        const employee = await employeeModel.findEmployee(email);
        res.status(201).send(employee);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function removeEmployee(req, res) {
    const email = req.params.email;
    console.log("i'm removing");    
    try {
        const employee = await employeeModel.removeEmployee(email);        
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


module.exports = { getCount, createEmployee, getEmployees, findEmployee,  getEmployee, removeEmployee, updateProfile, updateBalance };
