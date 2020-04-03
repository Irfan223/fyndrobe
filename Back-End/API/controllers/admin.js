
var config = require('../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.Admin = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var admin_user = req.query.email;
    var password = req.query.password;
    var sql = "SELECT * from admin Where admin_user=?";
    connection.query(sql, admin_user, function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                if (results[0].admin_password == password) {
                    // console.log(results[0].admin_user);
                    res.send({
                        "code": 200,
                        "success": "login sucessfull",
                        "admin_user": results[0].admin_user,
                    });
                }
                else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "Email does not exits"
                });
            }
        }
    });

}