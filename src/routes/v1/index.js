const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router();
console.log("reacedv1");
router.post('/bookings', BookingController.create);

module.exports = router;