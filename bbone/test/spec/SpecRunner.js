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
        models: '../app/scripts/models',
        collections: '../app/scripts/collections'
    }
});

require([ 'backbone', 'models/word-model' ], function (Backbone, wordmodel) {

        it('Word model', function( ) {
            describe('should exist', function () {
                expect( wordmodel ).to.exist ;
            });
            describe('should have an initialize method', function () {
                expect( wordmodel.initialize ).to.be.defined;
            });
            describe('it fires the custom update event when id changes', function () {
            });

        });

        mocha.run();
    });




