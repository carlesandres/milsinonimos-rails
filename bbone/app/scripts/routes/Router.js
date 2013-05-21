/*global define*/

define([
    'jquery',
    'backbone',
    'views/App-view',
    'collections/Meaning-collection',
], function ($, Backbone, AppView, MeaningsCollection) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'aja':               'log',
            '':                  'empty'
        },

        initialize: function () {
            Backbone.history.start( { pushState: true } );
            //Backbone.history.start( { pushState: true, hashChange: false } );
            this.view = new AppView();
            this.collection = new MeaningsCollection( );
        },

        empty: function() {
            console.log('empty');
        },

        log: function() {
            console.log('aja');
        },
    });

    return AppRouter;
});
