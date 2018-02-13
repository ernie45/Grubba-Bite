/** Require dependencies */
var mysql = require("mysql");

/** Create a connection to the database */
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

/** Upon connection */
connection.connect(function(error){
    if (error){
        console.log(error); 
    }
    console.log("connected as id " + connection.threadId); 
});


module.exports = connection;