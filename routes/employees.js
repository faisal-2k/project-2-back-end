// users.js
const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

router.get('/:name', employeesController.getEmployee);
router.get('/', employeesController.getEmployees);

router.post('/create', employeesController.createEmployee);
router.put('/profile-update/employee_id', employeesController.updateProfile);
router.put('/balance-update/employee_id', employeesController.updateBalance);

module.exports = router;
