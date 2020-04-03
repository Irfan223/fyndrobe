// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
// const url = "mongodb+srv://irfu123:12345@democluster-gfusw.mongodb.net";

// Database Name
// const dbName = 'demo';

// Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true});

// Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   const connection = client.connect();
//   client.close();
// });
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017'
let db;     // store the db connection

exports.mongoConnect = async() => {
  try {
    const client = await mongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connected');
    // console.log(client)
     db = client.db('gofresher');

    // db.collection("candidates").find({}).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   // db.close();
    // });
  } catch (error) {
    throw error;
  }
}

exports.getDb = async() => {
  if (db) {
    return db;
  }
  throw "No db found";
}