// userModel.js
const connectDB = require('../utils/db');

async function createUser(data) {  
    const db = await connectDB("payManagerDB");
    const users = db.collection('users');
    return users.insertOne(data);
}
async function getUsers() {
    const query = {}; 
    const options = {};
    const db = await connectDB("payManagerDB");
    const users = db.collection('users');
    const usersArray = await users.find(query, options).toArray();    
    return usersArray;
}
async function getUser(name) {
    const query = {name : {$regex :name}};    
    const db = await connectDB("payManagerDB");
    const users = db.collection('users');
    const user = users.findOne(query);
    return user;
}
async function updateUser(data) {
    const filter = {email : data.email}; 
    const updateDocument = {
        $set :  data,
      } 
    const db = await connectDB("AlSalam");
    const users = db.collection(`Employees`);
    const result = await users.updateOne(filter, updateDocument);      
    return result;
}
async function getAvailable(email) {
    const query = {email : email};    
    const db = await connectDB("payManagerDB");
    const users = db.collection('users');
    const user = await users.findOne(query);
    return user;
}
async function getManager(email) {
    const query = {email : email};    
    const db = await connectDB("payManagerDB");
    const users = db.collection('users');
    const user = await users.findOne(query);
    if (user?.role === 'manager') {
        return { isManager: true};    
      }
    else {

        return usersArray;
    }
}



module.exports = { createUser, getUsers, getUser, updateUser, getAvailable, getManager };
