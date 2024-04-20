const express = require('express');
const placesController = require('../controllers/places.controller')
const router = express.Router();

router.get('/getcities', placesController.getCities)
.get('/getplaces/:city', placesController.getCityPlaces);

exports.placesRouter = router;