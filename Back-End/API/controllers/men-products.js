var config = require('../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.mens_Products = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var customer_gender = "mens";
    var sql = "SELECT * from products WHERE customer_gender = ? ";
    connection.query(sql, customer_gender, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send("mens");
    });
}