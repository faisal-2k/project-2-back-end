// users.js
const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/applicationsController');
const { verifyUserToken } = require('../middlewares/verifyToken');

router.get('/count', applicationsController.getCount);
router.get('/', applicationsController.getApplications);
router.post('/create', applicationsController.createApplication);
router.delete('/remove_application/:app_id', applicationsController.removeApplication);


module.exports = router;
