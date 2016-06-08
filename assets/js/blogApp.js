angular.module("blogApp", []).controller("blogController", function ($http) {
    var blogApp = this;

    blogApp.displayUsers = function () {
        $http.get("/users").then(function (users) {
            blogApp.usersData = users["data"];
            blogApp.changeDisplayMode("Users");
        });
    };

    blogApp.displayPosts = function (userId) {
        userId = userId || blogApp.selectedUserId;
        if (parseInt(userId) > 0) {
            $http.get("/posts?userId=" + parseInt(userId)).then(function (posts) {
                blogApp.postsData = posts["data"];
                blogApp.changeDisplayMode("Posts");
            });
        }
    };
    blogApp.displayComments = function (userId, postId) {
        blogApp.selectedUserId = userId;
        $http.get("/comments?postId=" + parseInt(postId)).then(function (comments) {
            blogApp.commentsData = comments["data"];
            blogApp.changeDisplayMode("Comments");
        });
    };

    blogApp.changeDisplayMode = function (mode) {
        blogApp.showUsers = false;
        blogApp.showPosts = false;
        blogApp.showComments = false;
        blogApp["show" + mode] = true;
    };
    //On load
    blogApp.displayUsers();
});
