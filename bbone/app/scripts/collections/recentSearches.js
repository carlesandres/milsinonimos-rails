/*global define*/

define([
    'localStorage',
    'models/search',
    'models/Word'
], function (localStorage, search, Word) {
    'use strict';

    var RecentSearches = Backbone.Collection.extend({

        model: Word,

        initialize: function () {
            this.listenTo( search, 'change:id', this.add );
        },

        add: function() {
            var word = this.get('id');
        };

    });

    return new RecentSearches( 
        { localStorage: new Backbone.LocalStorage("RecentSearches")});
});
