function controllerPosts(req, res, db) {

    this.getPosts = function (search, callback) {
        var posts = db.collection("posts");
        var query = {};
        var columns = {"_id": false, "id":true, "userId":true, "title": true, "body":true};
        
        
        if (search["userId"]) {
            query["$and"] = [];
            query["$and"].push({userId: parseInt(search["userId"])});
        }

        posts.find(query,columns).sort().toArray(function (err, items) {
            if (err)
                throw err;

            if (typeof callback === "function") {
                callback(err, items);
            }
        });
    };
    return this;
}
module.exports = controllerPosts;