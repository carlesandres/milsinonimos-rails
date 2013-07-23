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
        views: '../app/scripts/views'
    }
});

require([ 'backbone', 'search-model', 'app-view', 'status-view'
         ], function (Backbone, smtest, aptest, stview) {
            mocha.run();
        });




