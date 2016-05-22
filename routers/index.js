var fs = require('fs');
var path = require('path');
var dbUser = require('../models/users.js');

function router(app) {
  app.get('/', function (req, res) {
    var sess = req.session;
    var user = null;

    // Session check.
    if (sess.views) {
      sess.views++;
    } else {
      sess.views = 1;
    }
    // Get User
    dbUser.queryById(1, function(err, result) {
      if (err) {
        return null;
      } else {
        user = result;
        res.render('index', {
          pageTitle: 'Hey Hellow World',
          message: 'Hello there!',
          pageViews: sess.views,
          user: user
        });
      }
    });
  });
}

module.exports = router;
