/** Bring in the ORM */
var orm = require("../config/orm.js");

/** Define access to the ORM */
var burger = {



    /** Access all the burgers through the ORM */
    getAllBurgers: function (callback) {
        /** This function takes in a callback */
        /** To perform that function after the job is done */
        orm.accessAllBurgers(function (result) {
            callback(result);
        });
    },



    /** Access insert function in ORM */
    insertOneBurger: function (burger_name, callback) {
        /**Takes in a callback */
        /** And an object to query with database */
        /** To perform once task is done */
        orm.insertOneBurger(burger_name, function (result) {
            callback(result);
        });
    },



    /** Takes in an id to update the devoured state */
    /** Accepts a callback */
    updateOneBurger: function (id, devoured, callback) {
        /** Access ORM to update a state */
        orm.updateOneBurger(id, devoured, function (result) {
            /** Perform a callback with the result */
            callback(result);
        });
    },



    /** Accepts an id and a callback */
    deleteOneBurger: function (condition, callback) {
        /** Access delete function in ORM */
        orm.deleteOneBurger(condition, function (result) {
            /** Perform a callback with the result */
            callback(result);
        });
    }
};



module.exports = burger;