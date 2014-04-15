/**
 * Created by Daddy on 4/15/2014.
 */

'use strict';

var pcnjApp = angular.module('pcnjApp', [
    'ngRoute',
    'pcnjControllers'
]);

pcnjApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/intro', {
                templateUrl: 'partials/intro.html',
                controller: 'PCNJIntroCtrl'
            }).
            when('/broadcast', {
                templateUrl: 'partials/broadcast.html',
                controller: 'PCNJBroadcastCtrl'
            }).
            when('/forum', {
                templateUrl: 'partials/forum.html',
                controller: 'PCNJForumCtrl'
            }).
            otherwise({
                redirectTo: '/intro'
            });
    }]);