var connection = require("./connection.js");
var orm = {
    selectAll: function(callback){
        var resArray = [];
        connection.query("SELECT * FROM burgers;", function(error, result){
            if (error){
                throw error;
            } 
            callback(result);
        });
    },
    insertOne: function(burger_name, callback){
        connection.query(
            "INSERT INTO burgers SET ?",
            {
                burger_name: burger_name
            },
            function(error, result){
                if (error){
                    throw error;
                }
                callback(result);
            }
        );
    },
    updateOne: function(id, devoured, callback){
        connection.query(
            "UPDATE burgers SET ? WHERE ?",
            [
                {
                    devoured: Boolean(devoured)
                },
                {
                    id: id 
                }
            ],
            function(error, result){
                if (error){
                    throw error;
                }
                callback(result);
            }
        )
    },
    deleteOne: function(condition, callback){
        connection.query(
            "DELETE FROM burgers WHERE id = " + condition, function(error, result){
                if (error){
                    throw error;
                }
                callback(result);
            });
    }
};
module.exports = orm;