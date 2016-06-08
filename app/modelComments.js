function controllerComments(req, res, db) {

    this.getComments = function (search, callback) {
        var comments = db.collection("comments");
        var query = {};
        var columns = {"_id": false, "id":true, "postId": true, "body":true};
        
        if (search["postId"]) {
            query["$and"] = [];
            query["$and"].push({postId: parseInt(search["postId"])});
        }

        comments.find(query, columns).sort().toArray(function (err, items) {
            if (err)
                throw err;

            if (typeof callback === "function") {
                callback(err, items);
            }
        });
    };
    return this;
}
module.exports = controllerComments;