var connection = require("./connection");
var orm = {
    selectAll: function(){
        connection.query("SELECT * FROM burgers;", function(error, result){
            if (error){
                throw error;
            }
            callback(result); 
        });
    },
    insertOne: function(burger_name, devoured, date){
        connection.query(
            "INSERT INTO burgers (burger_name, devoured, date) VALUES (?,?,?)",
            {
                burger_name: burger_name,
                devoured: devoured,
                date: date
            },
            function(error, result){
                orm.updateOne(burger_name, devoured, date);
            }
        );
    },
    updateOne: function(burger_name, devoured, date){
        connection.query(
            "UPDATE burgers SET ? WHERE ?",
            [
                {
                    devoured: devoured
                },
                {
                    burger_name: burger_name 
                }
            ],
            function(error, result){
                console.log("updated a burger");
            }
        )
    }
};
module.exports = orm;