var mysql = require('mysql');
var $config = require('../configs/config.js');
var env = process.env.NODE_ENV || 'local';


var pool = mysql.createPool({
  connectionLimit: 10,
  host: $config.database[env].host,
  user: $config.database[env].user,
  password: $config.database[env].pass,
  database: $config.database[env].db
});

var $sql = {
  queryById: 'select * from users where id=?',
  queryAll: 'select * from users'
};

module.exports = {
  add: function(data, callback) {},
  delete: function(id, callback) {},
  update: function(data, callback) {},
  queryById: function(id, callback) {
    var id = id;
    pool.getConnection(function(err, connection) {
      connection.query($sql.queryById, id, function(err, result) {
        connection.release();
        if (err) { console.log(err);
          callback(true);
          return; }
        if (result.length === 0) {
          callback(false, null);
        } else {
          callback(false, result[0]);
        }
      });
    });
  },
  queryAll: function(data, callback) {
    pool.getConnection(function(err, connection) {
      connection.query($sql.queryAll, function(err, result) {
        connection.release();
        if (err) { console.log(err);
          callback(true);
          return; }
        if (result.length === 0) {
          callback(false, null);
        } else {
          callback(false, result);
        }
      });
    });
  }
};
