const fs = require('fs');
const AWS = require('aws-sdk');
const connection = require('../../Config/mongodbConfig.js');
module.exports.ImageUpload = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    // const s3 = new AWS.S3({
    //     accessKeyId: process.env.AWS_ACCESS_KEY,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    //   });
    connection(function (err, db) {
        const db = client.db('demo');
        const  collection = db.collection('login');
        collection.find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });
    });
}