/** Require dependencies from npm */
var express = require("express");
var bars = require("express-handlebars");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
/** Create express app */
var app = express();

/** Define usage for the app */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

 //** Set up handlebars */
app.engine("handlebars", bars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

/** Allow proper routing of the app */
var burger = require("./models/burger.js");
require("./controllers/burgers_controller.js")(app, burger);

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});