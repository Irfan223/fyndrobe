var config = require('../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.CustomerRegister = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var customer_fname = "Md";
    var customer_lname = "Shazman Anwar";
    var customer_email = "shazman123@gmail.com";
    var customer_mobile = "8910541678";
    var customer_pass = "12345";
    var sql = "INSERT INTO customers(customer_fname, customer_lname, customer_email, customer_mobile, customer_pass) VALUES(?, ?, ?, ?,?)";
    connection.query(sql, [customer_fname, customer_lname, customer_email, customer_mobile, customer_pass], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

}