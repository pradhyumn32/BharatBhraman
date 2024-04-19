const express = require('express');
const ejsController = require('../controller/ejshome.controller');
const router = express.Router();

router.get('', ejsController.homeSSR);

exports.ejshomeRouter = router;