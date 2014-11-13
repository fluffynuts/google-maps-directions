define([
        'jquery',
        'routing',
        'controllers/home',
        ], function($, routing, home) {
        var app = angular.module('directionsApp', ['ngRoute']);
        app.controller('homeController', home);
        app.config(routing);
        angular.bootstrap($("#appContainer"), ['directionsApp']);
});
