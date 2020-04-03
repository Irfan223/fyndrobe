
var mysql = require('mysql');
config = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '12345',
  database: 'TrendzStack'
}
var connection = mysql.createConnection(config); //added the line
connection.connect(function (err) {
  if (err) throw err;
  console.log("MySql Database Connected Successfully!");
});
module.exports = {
  connection: mysql.createPool(config)
}