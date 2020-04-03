
var config = require('../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.CustomerLogin = function (req, res) {
    // const collection = req.app.locals.collection;
    // collection.find().toArray(function(err, items) {
    //     if(err) throw err;    
    //     console.log(items);
    //     res.send(items);
    // });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var email = req.query.email;
    var password = req.query.password;
    var sql = "SELECT * from customers Where customer_email=?";
    connection.query(sql, email, function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                if (results[0].customer_Pass == password) {
                    // console.log(results[0])
                    res.send({
                        "code": 200,
                        "success": "login sucessfull",
                        "customer_id": results[0].customer_id,
                        "customer_fname": results[0].customer_fname,
                        "customer_lname": results[0].customer_lname,
                        "customer_email": results[0].customer_email,
                        "customer_mobile": results[0].customer_mobile,
                        "customer_postcode1": results[0].customer_postcode1,
                        "customer_city1": results[0].customer_city1,
                        "customer_address1": results[0].customer_address1,
                        "customer_postcode2": results[0].customer_postcode2,
                        "customer_city2": results[0].customer_city2,
                        "customer_address2": results[0].customer_address2
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