// EmployeesModel.js
const connectDB = require('../utils/db');

async function getCount() {
    const db = await connectDB("AlSalam");
    const applications = db.collection('Leave_Applications'); 
    const count = await applications.countDocuments();
    return count;
}

async function getApplications() {
    const query = {}; 
    const options = {};
    const db = await connectDB("AlSalam");
    const applications = db.collection('Leave_Applications');
    const applicationArray = await applications.find(query, options).toArray(); 
    return applicationArray;
}

async function createApplication(data) {  
    const db = await connectDB("AlSalam");
    const applications = db.collection('Leave_Applications');
    return applications.insertOne(data);
}

async function removeApplication(app_id) {
    const query = {application_id : app_id};    
    const db = await connectDB("AlSalam");
    const Applications = db.collection('Leave_Applications');
    const result = Applications.deleteOne(query);
    return result;
}

module.exports = {getCount , getApplications, createApplication, removeApplication};