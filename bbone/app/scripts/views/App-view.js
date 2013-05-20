/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/Meaning-collection',
], function ($, _, Backbone, JST, MeaningCollection ) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#central',
        template: JST['app/scripts/templates/App.ejs'],
        events: {
            'keyup #searchbox':  'searchIfPossible'
        },

        initialize: function () {
            this.collection = new MeaningCollection();
        },

        render: function () {

        },

        searchIfPossible: function () {
            var searchterm = $('#searchbox').val() ;
        }


    });

    return AppView;
});
