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
            'keydown #searchbox':  'prevent',
            'keyup #searchbox':  'trySearch'
        },

        initialize: function () {
            this.model = word;
            this.listenTo(word, 'sync', this.handleSynonims);
        },

        handleSynonims: function () {
            var searchterm = encodeURIComponent( $('#searchbox').val() );
            if ( searchterm === encodeURIComponent(word.get('entry')) ) {
                if ( word.get('meanings') ) {
                    this.showResults(searchterm) ;
                } else {
                    this.showNotFound();
                }
            }
        },

        showResults: function (searchterm) {
            this.options.router.navigate( searchterm );
            $('#results').html('');
            word.get('meanings').each( function ( meaning ) {
                var view = new MView( { model: meaning } );
                $('#results').append( view.render().el );
            } );
            window.setTimeout( _.bind( this.logSearch, this), 1000, searchterm );
        },

        showNotFound: function () {
            $('#results').html('Este término no se encuentra en nuestro diccionario');
        },

        logSearch: function ( searchterm ) {
            // If the fetched term is still the current search term, then log it
            if ( searchterm === encodeURIComponent( $('#searchbox').val() ) ) {
                console.log( 'Registrando término: ' + searchterm );
            }
        },

        prevent: function( evt ) {
            if (evt.which === 13) { evt.preventDefault(); }
        },

        trySearch: function ( ) {
            var searchterm = $.trim( $('#searchbox').val() ) ;
            if ( !searchterm ) {
                $('#results').html('');
                return;
            }

            if ( word.id !== searchterm ) {
                $('#results').html( '<img src="images/loading.gif">' );
                if ( this.validateSearchTerm(searchterm)) {
                    word.set( 'id', searchterm );
                } else {
                    console.log('Error in search term');
                }
            }
        },

        validateSearchTerm: function () {
            return true;
        },
    });

    return AppView;
});
