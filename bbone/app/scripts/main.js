/*global require, $*/
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
        bootstrap: 'vendor/bootstrap',
        router: 'routes/Sinonimos-router'
    }
});

require([
    'backbone', 'router'
], function (Backbone, SinonimosRouter) {
    new SinonimosRouter();
});




