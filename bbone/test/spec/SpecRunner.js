/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../app/components/jquery/jquery',
        backbone: '../app/components/backbone-amd/backbone',
        underscore: '../app/components/underscore-amd/underscore',
        src: '../app/scripts',
        bootstrap: '../app/vendor/bootstrap',
        templates: '../.tmp/scripts/templates',
        routes: '../app/scripts/routes',
        router: 'routes/Router',
        models: '../app/scripts/models',
        collections: '../app/scripts/collections',
        views: '../app/scripts/views',
        localStorage: '../app/components/backbone.localStorage/backbone.localStorage'
    }
});

var specs = [];

specs.push( 'Search' );
specs.push( 'app-view' );
specs.push( 'status-view' );
specs.push( 'integration' );
specs.push( 'recentSearches' );
specs.push( 'Word-spec' );

require(specs, function () {
            mocha.run();
        });
