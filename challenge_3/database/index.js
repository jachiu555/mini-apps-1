const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'checkout'
})

db.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
  } else {
    console.log('connected to db');
  }

});

module.exports = db;