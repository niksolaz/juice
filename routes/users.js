var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/utente', function(req, res, next) {
  res.send('rispondi con una risorsa');
});

module.exports = router;
