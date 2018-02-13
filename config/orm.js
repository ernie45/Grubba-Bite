/** Bring in the database connection */
var connection = require("./connection.js");

/** Define the ORM */
var orm = {

    /** This function takes in a callback to perform after the job is done */
    accessAllBurgers: function(callback){
        var resArray = [];
        /** Access everything in the database */
        connection.query("SELECT * FROM burgers;", function(error, result){
            if (error){
                throw error;
            } 
            /** Send the results to the callback function to perform its deed */
            callback(result);
        });
    },


    /** Takes in object to query and a callback */
    insertOneBurger: function(burger_name, callback){
        /** Insert the object into the database */
        connection.query(
            "INSERT INTO burgers SET ?",
            {
                burger_name: burger_name
            },
            function(error, result){
                if (error){
                    throw error;
                }
                /** Perform callback if provided */
                callback(result);
            }
        );
    },



    /** Takes in an id to update a devoured state */
    /** Accepts a callback */
    updateOneBurger: function(id, devoured, callback){
        /** Set devoured state where the id that's provided */
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
                /** Perform callback with the results */
                callback(result);
            }
        )
    },

    

    /** Takes an id in params to update and takes a callback */
    deleteOneBurger: function(id, callback){
        /** Delete the given id sent in as params */
        connection.query(
            "DELETE FROM burgers WHERE id = " + id, function(error, result){
                if (error){
                    throw error;
                }
                /** Perform callback if necessary */
                callback(result);
            });
    }
};



module.exports = orm;