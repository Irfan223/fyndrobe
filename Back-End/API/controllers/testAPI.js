const db = require('../../Config/mongodbConfig').getDb();
// const _db = dbConnection.getDb();
// const db = _db;
// console.log(db);
module.exports.testAPI = function (req, res) {
    db.collection("candidates").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        // db.close();
    });
}