//import modules
const express = require('express');
const router = express.Router();
const { getApplications, createApplication, updateApplication } = require('../controllers/applications');

//defining the routes
router.get('/', getApplications);
router.post('/', createApplication);
router.put('/:id', updateApplication);

module.exports = router;
