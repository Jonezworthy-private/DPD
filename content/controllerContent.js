
function controllerContent(app) {

    this.displayPageHome = function (req, res) {
        return res.render("index",
                {
                    title: "Home page"
                    , header: "Welcome"
                }
        );

    };

    this.displayUsers = function (req, res) {
        app.users().getUsers(function (err, usersData) {
            if (!err && JSON) {
                res.send(JSON.stringify(usersData));
            } else {
                new controllerContent().displayPageError(req, res, 500);
            }
        });
    };

    this.displayPosts = function (req, res) {
        var search = {};
        if (parseInt(req["query"]["userId"]) > 0) {
            search["userId"] = parseInt(req["query"]["userId"]);

            app.posts().getPosts(search, function (err, postsData) {
                if (!err && JSON) {
                    res.send(JSON.stringify(postsData));
                }
            });
        } else {
            new controllerContent().displayPageError(req, res, 500);
        }
    };

    this.displayComments = function (req, res) {
        var search = {};
        if (parseInt(req["query"]["postId"]) > 0) {
            search["postId"] = parseInt(req["query"]["postId"]);

            app.comments().getComments(search, function (err, commentsData) {
                if (!err && JSON) {
                    res.send(JSON.stringify(commentsData));
                }
            });
        } else {
            new controllerContent().displayPageError(req, res, 500);
        }
    };

    this.displayAsset = function (req, res) {
        var path = require("path");
        var applicationBasePath = path.join(__dirname, "../assets/");

        var options = {
            root: applicationBasePath,
            dotfiles: "deny",
            headers: {
                "x-timestamp": Date.now(),
                "x-sent": true
            }
        };

        var requestedFile = req["url"];

        res.sendFile(requestedFile, options, function (err) {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
        });

    };
    //Error page
    this.displayPageError = function (req, res, statusCode) {
        res.status(500).send("Error " + statusCode + " <br /> Sorry, some thing went wrong");
    };
}

module.exports = controllerContent;