// users.js
const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');
const { verifyUserToken } = require('../middlewares/verifyToken');

router.get('/count', employeesController.getCount);
router.get('/:name', employeesController.getEmployee);
router.get('/find_employee/:email', employeesController.findEmployee);
router.delete('/remove_employee/:email', employeesController.removeEmployee);
router.get('/', employeesController.getEmployees);
// router.get('/', verifyUserToken, employeesController.getEmployees);

router.post('/create', verifyUserToken, employeesController.createEmployee);
router.put('/profile_update/:employee_id', employeesController.updateProfile);
router.put('/balance_update/:employee_id', employeesController.updateBalance);

module.exports = router;
