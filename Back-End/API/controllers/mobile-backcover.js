// var config = require('../../Config/databaseConfig.js');
// var connection = config.connection;
// module.exports.mobile_backcover = function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Credentials', true);
//     var sql = "SELECT * from mobilebackcover";
//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.send("mobile back cover");
//     });
// }