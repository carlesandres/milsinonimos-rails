/*global define*/

define([
    'jquery',
    'backbone',
    'views/App-view',
    'collections/Meanings-collection',
], function ($, Backbone, AppView, MeaningsCollection) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '':                         'empty',
            'sinonimos':                'empty',
            'sinonimos/:searchedterm':       'search'
        },

        initialize: function () {
            Backbone.history.start();
            this.view = new AppView();
            this.collection = new MeaningsCollection( );
        },

        empty: function() {

        },

        search: function(searchedterm) {

        }

    });

    return AppRouter;
});
