/**
 * Created by Daddy on 4/15/2014.
 */

'use strict';

/* Controllers */

var pcnjControllers = angular.module('pcnjControllers', []);

pcnjControllers.controller('PCNJIntroCtrl', ['$scope',
    function ($scope) {
        $scope.title = 'PCNJ Intro';
    }]);

pcnjControllers.controller('PCNJBroadcastCtrl', ['$scope',
    function ($scope) {
        $scope.title = 'PCNJ Broadcast center';
    }]);

pcnjControllers.controller('PCNJForumCtrl', ['$scope',
    function ($scope) {
        $scope.title = 'PCNJ Forum';
    }]);

