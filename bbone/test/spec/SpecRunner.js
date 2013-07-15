/*global require, it, describe, expect*/
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
        bootstrap: '../app/vendor/bootstrap',
        templates: '../app/templates',
        models: '../app/scripts/models'
    }
});

require([ 'backbone', 'models/word-model' ], function (Backbone, wordmodel) {

        it('should be a test', function( ) {
            describe('that exists and fails', function () {
                expect( wordmodel ).to.exist ;
            });
        });

        mocha.run();
    });




