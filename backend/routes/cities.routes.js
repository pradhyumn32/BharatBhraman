const express = require('express');
const placeController = require('../controller/Place.controller');
const router = express.Router();

router.get('/getcities', placeController.getCities);

exports.cityRouter = router;