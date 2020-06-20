const express = require('express'); // express middleware
const cookieParser = require('cookie-parser'); // cookie parse middleware
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; // port number 
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
const routes = require('./API/routes/index.js');
const bodyParser = require('body-parser');  // body-parser
app.use(bodyParser.json()); // parses application/json
app.use(bodyParser.urlencoded({ extended: true }));  // parses application/x-www-form-urlencoded
// a middleware with no mount path; gets executed for every request to the app
app.use(function(req, res, next) {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin", "http://www.fyndrobe.com");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true)
    return next();
});
app.use("/api", routes, function(req, res, next) {
    res.json('Hello Node Js')
}); // a middleware with  mount path
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(cors());
app.use(cookieParser());
const dbConncect = require('./Config/mongodbConfig'); //connecting to db 
dbConncect.initDB(); // initialize db
app.listen(port, () => console.info(`Running on port ${port}`)); // listen on port
// --- End----