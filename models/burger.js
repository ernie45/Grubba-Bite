var orm = require("../config/orm.js");
var burger = {
    selectAll: function(callback){
        orm.selectAll(function(result){
            callback(result);
        });
    },
    insertOne: function(burger_name, callback){
        orm.insertOne(burger_name, function(result){
            callback(result);
        });
    },
    updateOne: function(id, devoured, callback){
        orm.updateOne(id, devoured, function(result){
            callback(result);
        }); 
    }, 
    deleteOne: function(condition, callback){
        orm.deleteOne(condition, function(result){
            callback(result);
        });
    }
};
module.exports = burger;