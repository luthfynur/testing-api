var express = require('express');
var router = express.Router();
const queueController = require('../controller/queueController')


router.post('/', queueController.addQueue);

module.exports = router;
