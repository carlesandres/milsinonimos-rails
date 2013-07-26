/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/search',
    'models/SearchLog',
    'views/Meaning-view',
], function ($, _, Backbone, JST, search, SearchLog, MView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#central',
        template: JST['app/scripts/templates/App.ejs'],
        events: {
            'keydown #searchbox':  'prevent',
            'keyup #searchbox':  'trySearch'
        },

        initialize: function () {
            this.listenTo( search, 'sync', this.handleResults);
            this.listenTo( search, 'serverError', this.handleServerError);
        },

        handleServerError: function () {
            console.log('Server error as handled by AppView' );
        },

        prevent: function( evt ) {
            if (evt.which === 13) { evt.preventDefault(); }
        },

        trySearch: function ( ) {
            var searchterm = $.trim( $('#searchbox').val().toLowerCase() ) ;
            if ( !searchterm ) {
                $('#results').html('');
                return;
            }

            if ( search.id !== (searchterm) ) {
                $('#results').html( '<img src="images/loading.gif">' );
                if ( this.validateSearchTerm(searchterm)) {
                    search.set( 'id', (searchterm) );
                } else {
                    console.log('Error in search term');
                }
            }
        },

        validateSearchTerm: function () {
            return true;
        },

        handleResults: function () {
            var searchterm = $.trim( $('#searchbox').val().toLowerCase() ) ;
            if ( searchterm === search.get('entry') ) {
                if ( search.get('status') === 'not_found' ) {
                    this.showNotFound();
                } else {
                    this.showResults(searchterm) ;
                }
            }
        },

        showResults: function (searchterm) {
            this.options.router.navigate( encodeURIComponent(searchterm) );
            $('#results').html('');
            search.get('meanings').each( function ( meaning ) {
                var view = new MView( { model: meaning } );
                $('#results').append( view.render().el );
            } );
            window.setTimeout( _.bind( this.logSearch, this), 1000, searchterm );
        },

        showNotFound: function () {
            $('#results').html('Este término no se encuentra en nuestro diccionario');
        },

        logSearch: function ( searchterm ) {
            var search;
            // If the fetched term is still the current search term, then log it
            if ( searchterm === $('#searchbox').val() ) {
                search = new SearchLog( { entry: searchterm } );
            }
        },
    });
    return AppView;
});
