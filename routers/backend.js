var express = require('express');
var router = express.Router();

// Middleware
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Router prefix + /
router.get('/', function(req, res) {
  res.send('Backend home page');
});

// Router prefix + /
router.get('/login', function(req, res) {
  res.send('Login Page');
});

module.exports = router;
