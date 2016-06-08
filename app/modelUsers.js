function controllerUsers(req, res, db) {

    this.getUsers = function (callback) {
        var users = db.collection("users");
        var query = {};
        var columns = {"_id": false, "id":true, "name": true, "username":true, "email":true};

        users.find(query, columns).sort({"name": 1}).toArray(function (err, items) {
            if (err)
                throw err;

            if (typeof callback === "function") {
                callback(err, items);
            }
        });
    };
    return this;
}
module.exports = controllerUsers;