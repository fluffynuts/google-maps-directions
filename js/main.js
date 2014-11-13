(function() {
    function lib(relPath) {
        var parts = relPath.split('/');
        if (parts.length == 1) {
            relPath = relPath + '/' + relPath;
        }
        return ['../bower_components', relPath].join('/');
    }
    require.config({
        base: 'js',
        paths: {
            'angular': lib('angular'),
            'angular-route': lib('angular-route'),
            'jquery': lib('jquery/dist/jquery')
        },
        map: {
            '*': { 'jquery' : 'jquery-private' },
            'jquery-private': { 'jquery': 'jquery' }
        },
        shim: {
            'angular-route': {
                deps: [ 'angular' ]
            },
            'app': {
                deps: [ 'angular-route' ]
            }
        }
    });
    define('jquery-private', ['jquery'], function($) {
        return $.noConflict(true);
    });

    require(['app']);
})();
