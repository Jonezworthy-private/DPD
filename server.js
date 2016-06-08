var express = require("express");
var app = express();
var fs = require("fs");
var MongoClient = require("mongodb").MongoClient;
var routes = require("./routes/controllerRoutes");
//

MongoClient.connect("mongodb://localhost:27017/DPD", function (err, db) {
    if (err) {
        throw err;
    }
    app.set("views", "./views");
    app.set("view engine", "jade");
    routes(app, db);
    app.listen(28070);
    console.log("Waiting on port 28070");
});
