const express = require('express')
const router = express.Router()
const stateController = require('../controllers/state.controller');

// Retrieve all states
router.get('/', stateController.findAll);

// Retrieve a single state of code
router.get('/:code', stateController.findByCode);

// Retrieve all states of country code
router.get('/country/:code', stateController.findByCountryCode);

module.exports = router