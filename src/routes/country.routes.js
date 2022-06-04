const express = require('express')
const router = express.Router()
const countryController = require('../controllers/country.controller');

// Retrieve all countries
router.get('/', countryController.findAll);

// Retrieve a single country of code
router.get('/:code', countryController.findByCode);

module.exports = router