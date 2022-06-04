const express = require('express')
const router = express.Router()
const cityController = require('../controllers/city.controller');

// Retrieve all cities
router.get('/', cityController.findAll);

// Retrieve a single city of code
router.get('/:code', cityController.findByCode);

// Retrieve all cities of state code
router.get('/state/:code', cityController.findByStateCode);

module.exports = router