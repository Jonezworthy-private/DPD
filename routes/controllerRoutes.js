var contentInclude = require("../content/controllerContent");
var applicationInclude = require("../app/controllerApp");

function routesController(app, db) {
    var applicationController = new applicationInclude(db);
    var controllerContent = new contentInclude(applicationController);


    app.get("/", controllerContent.displayPageHome);
    //
    app.get("/users", controllerContent.displayUsers);
    app.get("/posts*", controllerContent.displayPosts);
    app.get("/comments*", controllerContent.displayComments);

    //Purposefully not using /asset/ URL
    app.get("/js/*", controllerContent.displayAsset);
    app.get("/css/*", controllerContent.displayAsset);


    //Error handle routes
    app.get("*", function (req, res) {
        res.status(404).send("Sorry, that request produced a 404 error");
    });
}

module.exports = routesController;