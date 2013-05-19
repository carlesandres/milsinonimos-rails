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
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone'
], function (Backbone) {
    window.Sino = new SinonimosRouter();
    Backbone.history.start();

    $.get('/sinonimos/casa.json', function( response ) {
        console.log( response );
    }, 'json' );
});




