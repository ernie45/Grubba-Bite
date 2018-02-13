/** Require dependencies */
var express = require("express");
var handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

/** Create express app */
var app = express();

/** Define usage for the express app ********************************************************************/

/** Allow routing to public folder using relative routing */
app.use(express.static("public"));
/** Define middleware for parsing JSON format */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

 //** Set up handlebars as the view engine */
 /** The main layout where everything will go is the main.handlebars file */
app.engine("handlebars", handlebars({defaultLayout: "main"}));
/** Set up handlebars as the view engine */
app.set("view engine", "handlebars");

/** Allow proper routing of the app */
var burger = require("./models/burger.js");

/** Perform routing functionality */
/** Sending the models as arguments */
/** Allows the controllers to get functions they need */
require("./controllers/burgers_controller.js")(app, burger);

/** Upon proper connection */
app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});