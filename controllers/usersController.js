// usersController.js
const userModel = require('../models/userModel');

async function createUser(req, res) {
    const data = req.body;
    const email = data.email;

    try {
        // Checking
        const existingEmployee = await userModel.findUser(email);
        if (existingEmployee) {
            return res.status(400).send('Employee already exists!');
        }

        //creating
        await userModel.createUser(data);
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).send('Internal Server Error');
    }

    // try {
    //     await userModel.createUser(data);
    //     res.status(201).send('User created successfully');
    // } catch (error) {
    //     console.error('Error creating user:', error);
    //     res.status(500).send('Internal Server Error');
    // }
}
async function getUsers(req, res) {
    try {
        const users = await userModel.getUsers();
        res.status(201).send(users);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function getUser(req, res) {
    const name = req.params.name.toLowerCase();

    try {
        const users = await userModel.getUser(name);
        res.status(201).send(users);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function updateUser(req, res) {
    const data = req.body;
    try {
        const employees = await employeeModel.updateProfile(data);
        res.status(201).send(employees);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getManager(req, res) {
    const email = req.params.email;

    try {
        const users = await userModel.getManager(email);
        res.status(201).send(users);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = { createUser, getUsers, getUser, updateUser, getManager };
