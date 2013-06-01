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
            this.listenTo(word, 'sync', this.handleSynonims);
        },

        render: function () {
        },

        handleSynonims: function () {
            var searchterm = encodeURIComponent( $('#searchbox').val() );
            if ( searchterm === word.get('entry') ) {
                $('#results').html('');
                word.get('meanings').each( function ( meaning ) {
                    var view = new MView( { model: meaning } );
                    $('#results').append( view.render().el );
                } );
                //var aa = this.logSearch ;
                window.setTimeout( _.bind( this.logSearch, this), 1000, searchterm );
            }
        },

        logSearch: function ( searchterm ) {
            // If the fetched term is still the current search term, then log it
            if ( searchterm === encodeURIComponent( $('#searchbox').val() ) ) {
                console.log( 'Registrando término: ' + searchterm );
            }
        },

        trySearch: function () {
            var searchterm = $('#searchbox').val() ;
            $('#results').html( 'Espera...' );
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
