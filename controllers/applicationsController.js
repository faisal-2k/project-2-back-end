const applicationModel = require('../models/applicationModel');

async function getCount(req, res) {
    // const company = req.params.company;
    try {
        const result = await applicationModel.getCount();
        res.status(200).json({'success' : true, 'result': result})
    } catch (error) {
        console.error('Error creating Application:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getApplications(req, res) {
    try {
        const employees = await applicationModel.getApplications();
        res.status(201).send(employees);
    } catch (error) {
        console.error('Error creating Application:', error);
        res.status(500).send('Internal Server Error');
    }
}
async function createApplication(req, res) {
    const data = req.body;

    try {
        await applicationModel.createApplication(data);
        res.status(201).send('Application created successfully');
    } catch (error) {
        console.error('Error creating Application:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function removeApplication(req, res) {
    const app_id = parseInt(req.params.app_id);
    try {
        const application = await applicationModel.removeApplication(app_id);        
        res.status(201).send(application);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = { getCount , getApplications, createApplication, removeApplication};
