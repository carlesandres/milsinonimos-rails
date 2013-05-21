/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/Word-model',
    'collections/Meaning-collection',
], function ($, _, Backbone, JST, Word) {
    'use strict';

    // AppView listens to user input in the #searchbox,
    // validates it and triggers a change word.name 
    // which should trigger a Meanings COllection updated
    // which should trigger a ResultsView update.
    // If validation fails, AppView displays an error message to the user

    var AppView = Backbone.View.extend({
        el: '#central',
        template: JST['app/scripts/templates/App.ejs'],
        events: {
            'keyup #searchbox':  'searchIfPossible'
        },

        initialize: function () {
            this.listenTo(Word, 'sync', this.render);

        },

        render: function () {
            console.log( 'Word changed');
        },

        searchIfPossible: function () {
            var searchterm = $('#searchbox').val() ;
            if ( this.validateSearchTerm(searchterm)) {
                Word.set( 'id', encodeURIComponent(searchterm) );
                //this.word.fetch();
            } else {
                console.log('Error in search term');
            }
        },

        validateSearchTerm: function () {
            return true;
        }


    });

    return AppView;
});
