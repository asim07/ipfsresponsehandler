var express = require('express');
var router = express.Router();
const controller = require('../controllers/imagemaker')

/* GET home page. */
router.get('/token/:id', controller.main);
router.get('/mocdata/:id', controller.MocData);
module.exports = router;
