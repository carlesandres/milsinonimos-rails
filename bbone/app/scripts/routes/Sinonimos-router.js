/*global define*/

define([
    'jquery',
    'backbone',
], function ($, Backbone) {
    'use strict';

    var SinonimosRouter = Backbone.Router.extend({
        routes: {
            '':                         'empty',
            'sinonimos':                'empty',
            'sinonimos/:palabra':       'search'
        },

        empty: function() {

        },

        search: function(palabra) {

        }

    });

    return SinonimosRouter;
});
