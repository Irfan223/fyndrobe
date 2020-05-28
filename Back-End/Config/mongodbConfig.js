
const mongoose = require("mongoose");
// const mongoClient = mongodb.MongoClient;
const url = "mongodb+srv://irfu123:12345@fashionfocus-gfusw.mongodb.net/FashionFocus";
let db;     // store the db connection

module.exports = {
  initDB() {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {
      console.log('Mongodb connected');
      // db = connection.db;
    });
  }
}