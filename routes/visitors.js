var express = require('express');
var router = express.Router();
const visitorController = require('../controller/visitorController')


router.post('/', visitorController.createVisitor);
router.get('/', visitorController.findVisitors)

module.exports = router;
