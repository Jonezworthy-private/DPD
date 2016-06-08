//This application controller, you go through this to the main application
//This file allows for "dependency injection"
function applicationController(db) {

    this.users = function (req, res) {
        var modelUsers = require("./modelUsers");
        return modelUsers(req, res, db);
    };
    this.posts = function (req, res) {
        var modelPosts = require("./modelPosts");
        return modelPosts(req, res, db);
    };

    this.comments = function (req, res) {
        var modelComments = require("./modelComments");
        return modelComments(req, res, db);
    };
}

module.exports = applicationController;