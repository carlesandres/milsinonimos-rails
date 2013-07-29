/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'collections/recentSearches'], function (recentSearches) {

        describe('recentSearches collection', function( ) {
            before( function () {
                //sinon.stub( recentSearches, 'save' );
            } );

            after( function () {
                //recentSearches.save.restore();
            } );

            it('exists', function () {
                recentSearches.should.exist ;
                console.log( recentSearches );
            });

            it('uses synonim as its model');

            it('should call its view when initialized');

            it.skip('uses localStorage as a persistence layer', function () {
                //recentSearches.localStorage.is.a('function');
            });
        });
  });

