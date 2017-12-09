var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObj = {
            burgers: data
        }
        res.render("index", burgerObj);
    });
});
router.get("/api/burgers", function(req, res){
    res.json(burgers.selectAll());
});
router.post("/api/burgers", function(req, res){
    burgers.insertOne(req.body.burger_name, req.body.devoured, req.body.date);
    res.end();
});
module.exports = router; 