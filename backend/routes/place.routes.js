const express = require('express');
const placeController = require('../controller/Place.controller');
const router = express.Router();

router.get('/:city', placeController.getCityPlaces);

exports.placeRouter = router;