/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/Word-model',
    'views/Meaning-view',
], function ($, _, Backbone, JST, word, MView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#central',
        template: JST['app/scripts/templates/App.ejs'],
        events: {
            'keyup #searchbox':  'trySearch'
        },

        initialize: function () {
            this.model = word;
            this.listenTo(word, 'sync', this.renderSynonims);
        },

        render: function () {
        },

        renderSynonims: function () {
            $('#results').html('');
            word.get('meanings').each( function ( meaning ) {
                var view = new MView( { model: meaning } );
                $('#results').append( view.render().el );
            } );
        },

        trySearch: function () {
            var searchterm = $('#searchbox').val() ;
            if ( this.validateSearchTerm(searchterm)) {
                word.set( 'id', encodeURIComponent(searchterm) );
            } else {
                console.log('Error in search term');
            }
        },

        validateSearchTerm: function () {
            return true;
        },
    });

    return AppView;
});
