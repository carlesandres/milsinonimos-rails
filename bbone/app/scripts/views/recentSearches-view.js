/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/search',
    'collections/recentSearches',
], function ($, _, Backbone, JST, search, recentSearches) {
    'use strict';

    var recentSearchesView = Backbone.View.extend({
        el: '#recent',
        template: JST['app/scripts/templates/Recent.ejs'],
        events: {
            //'keydown #searchbox':  'prevent',
            //'keyup #searchbox':  'trySearch'
        },

        initialize: function () {
            this.listenTo( recentSearches, 'add', this.add);
        },

        add: function () {
            // Update View
            return true;
        },

    });
    return new recentSearchesView();
});