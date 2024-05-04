// users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { verifyUserToken, setToken } = require('../middlewares/verifyToken');

router.get('/request_token', setToken);
router.post('/create',  usersController.createUser);
router.get('/check-email', usersController.getAvailable);

router.get('/ismanager/:email', usersController.getManager);
router.get('/:name', usersController.getUser);
router.get('/', usersController.getUsers);


module.exports = router;
