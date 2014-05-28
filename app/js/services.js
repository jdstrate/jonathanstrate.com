'use strict';

/**
 * @ngdoc module
 * @module services
 * @name services
 * @function
 *
 * @description
 * Exposes the WordPress REST API.
 */

var services = angular.module('services', ['ngResource', 'configuration']);

/**
 * Post by slug.
 */
services.factory('Post', ['$resource', 'WORDPRESS_END_POINT',
    function($resource, WORDPRESS_END_POINT) {
        return $resource(WORDPRESS_END_POINT + '/posts/slug::post_slug', {
            post_slug: '@post_slug'
        }, {
            query: {
                method: 'GET'
            }
        });
    }
]);

/**
 * Posts.
 */
services.factory('Posts', ['$resource', 'WORDPRESS_END_POINT',
    function($resource, WORDPRESS_END_POINT) {
        return $resource(WORDPRESS_END_POINT + '/posts?number=:number', {
            number: '@number'
        }, {
            query: {
                method: 'GET'
            }
        });
    }
]);