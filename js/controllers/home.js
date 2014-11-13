define([], function() {
    return [
        '$scope',
        '$http',
        '$sce',
        function(scope, http, sce) {
            var baseUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
            scope.from = 'The Pavillion, Westville, South Africa';
            scope.to = '115 Fremantle Road, Hillary, South Africa';
            scope.steps = [];
            scope.to_trusted = function(html) {
                return sce.trustAsHtml(html);
            };
            scope.getDirections = function() {
                scope.steps = [ 'loading...' ];
                scope.enabled = false;
                var qry = baseUrl + 'origin=' + scope.from + '&destination=' + scope.to;
                http.get(qry).then(function(results) {
                    scope.steps = results.data.routes[0].legs[0].steps;
                    scope.enabled = true;
                });
            };
        }
    ];
});
