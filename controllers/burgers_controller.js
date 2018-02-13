/** This function takes in an express app as argument upon which to work on */
/** It also takes in the models that allow access to the app's ORM */
module.exports = function(app, burger){



    /** Upon receiving root get request */
    app.get("/", function(req, res){
        /** Access all the burgers through the burger model */
        /** This function takes in a callback function to perform after the job is done */
        burger.getAllBurgers(function(data){
            /** Create an object using the data received from the database */
            var burgersObject = {
                /** Define the burgers to be sent to html with the data received */
                /** Note that burgers has to be named as in the handlebars receiver in the index.handlebars */
                burgers: data
            };
            console.log("Showing all burgers...");
            /** Send all burgers in database to the index.handlebars file */
            res.render("index", burgersObject);
        });
    }),



    /** Upon receiving a post request with the following path */
    app.post("/api/burgers", function(req, res){
        /** Access the insert function through the burger model */
        /** This function takes in the burger object and a callback function */
        /** To perform when the object is inserted */
        /** It receives the object sesnt from the javascript */
        burger.insertOneBurger(req.body.burger_name, function(data){
            console.log("Inserted a burger");
        });
        res.end();
    });



    /** Upon receiving a put request with id as params */
    app.put("/api/burgers/:id", function(req, res){
        /** Access the update function through the burger model */
        /** This function takes in the id, what to update, and a callback */
        burger.updateOneBurger(req.params.id, req.body.devoured, function(data){
            console.log("Burger devoured state updated");
        });
        res.end();
    });



    /** Upon receiving delete request with id as params */
    app.delete("/api/burgers/:id", function(req, res){
        /** Access delete function through model */
        burger.deleteOneBurger(req.params.id, function(data){
            console.log("Burger deleted");
        });
        res.end();
    });
};
