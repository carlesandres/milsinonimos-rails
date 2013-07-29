/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'models/Synonym'], function (Synonym) {

        describe('Synonym model', function( ) {
            it('sets the "entry" property to blank when initialized', function () {
                //recentSearches.localStorage.is.a('function');
                var syno = new Synonym();

                syno.get('entry').should.equal('');
            });
        });
  });