var orm = require("../config/orm.js");
var burger = {
    selectAll: function(){
        orm.selectAll();
    },
    insertOne: function(burger_name, devoured, date){
        orm.insertOne(burger_name, devoured, date);
    },
    updateOne: function(burger_name, devoured, date){
        orm.updateOne(buger_name, devoured, date); 
    }
};
module.exports = burger; 