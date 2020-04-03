
var config = require('../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.InventryAPI = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    // var admin_user = req.query.email;
    // var password = req.query.password;
    var sql = "SELECT * from product_stock";
    connection.query(sql, function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log(results);
            res.send({
                "code": 200,
                "status": "success"
            });
        }
    });
}