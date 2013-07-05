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

require([ 'lib/mocha/mocha', 'lib/chai' ], function (mocha, chai) {
    var expect = chai.expect;
    mocha.setup('bdd');
    //require(['
    mocha.run();
  });




