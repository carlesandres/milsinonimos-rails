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
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        src: '../app/scripts',
        bootstrap: 'vendor/bootstrap',
        router: 'routes/Router',
        templates: 'templates'
    }
});

require([ 'backbone', 'router', 'views/App-view' ], function (Backbone, Router, AppView) {
        var router = new Router();
        router.view = new AppView( { router: router } );
    });




