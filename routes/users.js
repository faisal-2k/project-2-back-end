// users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { verifyUserToken, setToken } = require('../middlewares/verifyToken');

router.get('/request_token', setToken);
router.post('/create',  usersController.createUser);
router.put('/update_user',  usersController.updateUser);

router.get('/ismanager/:email', usersController.getManager);
router.get('/', usersController.getUsers);
router.get('/:name', usersController.getUser);


module.exports = router;
