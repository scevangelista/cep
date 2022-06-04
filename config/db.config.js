'user strict';

const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'cep'
});

databaseConnection.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = databaseConnection;