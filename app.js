var express = require('express');
var app = express();
var router = require('./routers');
var $config = require('./configs/config.js');
var session = require('express-session');
var env = process.env.NODE_ENV || 'local';

// Session settings
app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 1800000 }, // 30 minute
  resave: true,
  rolling: true,
  saveUninitialized: false
}));

// Require routers
router(app);
// Backend Router
app.use('/admin', require(`./routers/backend`));

// Set static file path
app.use('/static', express.static(__dirname + '/public'));

// Set template engine Jade
app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen($config.port, function() {
  var host = 'localhost';
  var port = $config.port;
  console.log('Example app listening at http://%s:%s', host, port);
});
