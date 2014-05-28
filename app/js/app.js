'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'controllers',
    'services'
]);

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'controllerAbout'
            }).
            when('/blog/:post_slug', {
                templateUrl: 'partials/post.html',
                controller: 'controllerPost'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'controllerContact'
            }).
            when('/projects', {
                templateUrl: 'partials/projects.html',
                controller: 'controllerProjects'
            }).
            when('/' , {
                templateUrl: 'partials/main.html',
                controller: 'controllerMain'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);