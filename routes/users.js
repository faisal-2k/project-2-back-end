// users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/:name', usersController.getUser);
router.get('/', usersController.getUsers);

router.get('/ismanager/:email', usersController.getManager);


router.post('/create', usersController.createUser);
module.exports = router;
