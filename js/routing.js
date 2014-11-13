define([], function() {
    'use strict';
    return [
        '$routeProvider',
        function(routeProvider) {
            routeProvider.when('/home', {
                    controller: 'homeController',
                    templateUrl: 'views/home.html'
            });
            routeProvider.otherwise({
                    redirectTo: '/home'
            });
        }];
});
