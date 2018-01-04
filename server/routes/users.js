var express = require('express');
var router = express.Router();
var user = require('../controllers/controllersUser')
/* GET users listing. */
router.post('/signin', user.getDataUser);
router.get('/', user.getAllDataUser)

module.exports = router;
