// users.js
const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');
const { verifyUserToken } = require('../middlewares/verifyToken');

router.get('/:name', employeesController.getEmployee);
router.get('/', verifyUserToken, employeesController.getEmployees);

router.post('/create', verifyUserToken, employeesController.createEmployee);
router.put('/profile-update/employee_id', verifyUserToken, employeesController.updateProfile);
router.put('/balance-update/employee_id', verifyUserToken, employeesController.updateBalance);

module.exports = router;
