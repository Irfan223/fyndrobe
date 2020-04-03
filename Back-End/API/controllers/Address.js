var config = require('../../Config/databaseConfig.js');
var connection = config.connection;
// Get Customer Details
module.exports.GetAddress = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var customer_id = 2;
        var sql = "SELECT customer_postcode1, customer_city1, customer_address1, customer_postcode2, customer_city2, customer_address2 FROM customers  WHERE customer_id = ?";
    connection.query(sql, customer_id, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

}
// Add Customer Address
module.exports.AddAddress = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var address_1or2 = req.query.address_1or2;
    var customer_id = req.query.customer_id;
    var customer_postcode = req.query.postcode;
    var customer_city = req.query.city;
    var customer_address = req.query.address;
    if (address_1or2 === 1) {
        var sql = "UPDATE customers SET customer_postcode1 = ?, customer_city1 = ?, customer_address1 = ? WHERE customer_id = ?";
    } else if (address_1or2 === 2) {
    var sql = "UPDATE customers SET customer_postcode2 = ?, customer_city2 = ?, customer_address2 = ? WHERE customer_id = ?";
    }
    connection.query(sql, [customer_postcode, customer_city, customer_address, customer_id], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

}
// Delete Customer Address
module.exports.DeleteAddress = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var address_1or2 = 1;
    var customer_id = 1;
    var customer_postcode = null;
    var customer_city = null;
    var customer_address = null;
    if (address_1or2 === 1) {
        var sql = "UPDATE customers SET customer_postcode1 = ?, customer_city1 = ?, customer_address1 = ? WHERE customer_id = ?";
    } else if (address_1or2 === 2) {
    var sql = "UPDATE customers SET customer_postcode2 = ?, customer_city2 = ?, customer_address2 = ? WHERE customer_id = ?";
    }
    connection.query(sql, [customer_postcode, customer_city, customer_address, customer_id], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

}
// Update Customer Details
module.exports.UpdateAddress = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var address_1or2 = 1;
    var customer_id = 1;
    var customer_postcode = null;
    var customer_city = null;
    var customer_address = null;
    if (address_1or2 === 1) {
        var sql = "UPDATE customers SET customer_postcode1 = ?, customer_city1 = ?, customer_address1 = ? WHERE customer_id = ?";
    } else if (address_1or2 === 2) {
    var sql = "UPDATE customers SET customer_postcode2 = ?, customer_city2 = ?, customer_address2 = ? WHERE customer_id = ?";
    }
    connection.query(sql, [customer_postcode, customer_city, customer_address, customer_id], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

}