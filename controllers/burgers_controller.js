module.exports = function(app, burger){
    app.get("/", function(req, res){
        burger.selectAll(function(data){
            var burgersObject = {
                burgers: data
            };
            res.render("index", burgersObject);
        });
    }),
    app.post("/api/burgers", function(req, res){
        burger.insertOne(req.body.burger_name, function(data){
            
        });
        res.end();
    });
    app.put("/api/burgers/:id", function(req, res){
        burger.updateOne(req.params.id, req.body.devoured, function(data){
            console.log(req.body.devoured);
        });
        res.end();
    });
    app.delete("/api/burgers/:id", function(req, res){
        burger.deleteOne(req.params.id, function(data){
            console.log("Deleted One");
        });
        res.end();
    });
};
