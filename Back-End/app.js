const express = require('express');
// var MongoClient = require('mongodb').MongoClient;
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.static(path.join(__dirname, '../Front_End/build')));
const routes = require('./API/routes/index.js');
app.use('/api', routes);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const dbConncect = require('./Config/mongodbConfig');
//connecting to db 
dbConncect.mongoConnect();
// const uri = "mongodb+srv://irfu123:12345@democluster-gfusw.mongodb.net/demo";
// const client = new MongoClient(uri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });
// client.connect(err => {
//     const collection = client.db("demo").collection("login");
//     collection.find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         client.close();
//       });
// });
app.listen(port, () => console.info(`REST API running on port ${port}`));