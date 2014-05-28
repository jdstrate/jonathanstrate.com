'use strict';

/* Controllers */

var controllers = angular.module('controllers', ['configuration']);

/**
 * The about page.
 */
controllers.controller('controllerAbout');

/**
 * The contact page.
 */
controllers.controller('controllerContact');

/**
 * The main page.
 */
controllers.controller('controllerMain', ['$scope', 'MAIN_DEFAULT_POSTS', 'Posts',
    function($scope, MAIN_DEFAULT_POSTS, Posts) {
        Posts.query({ number: MAIN_DEFAULT_POSTS }, function(response) {
            $scope.posts = response;
        });
    }
]);

/**
 * Detail for a post.
 */
controllers.controller('controllerPost', ['$scope', '$routeParams', 'Post',
    function($scope, $routeParams, Post) {
        Post.query({ post_slug: $routeParams.post_slug}, function(response) {
            $scope.post = response;
        });
    }
]);

/**
 * The projects page.
 */
controllers.controller('controllerProjects');