const express = require('express');
const router = express.Router();
const { createRental, getAllRentals } = require('../controllers/rentalController');
const auth = require('../middleware/auth');

router.post('/', auth, createRental);
router.get('/', auth, getAllRentals);

module.exports = router;