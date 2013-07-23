/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'backbone', 'models/Search-model'], function (Backbone, Searchmodel) {

        describe('Search model', function( ) {
            before( function () {
                this.search = new Searchmodel();
                this.updatespy = sinon.stub( this.search, 'fetch' );
            } );

            after( function () {
                this.search.fetch.restore();
            } );

            it('should exist', function () {
                this.search.should.exist ;
            });

            it('should have an initialize method', function () {
                this.search.initialize.should.be.defined;
            });

            it('calls the fetch method when id changes', function () {
                this.search.set( 'id', 'whatever' );
                this.updatespy.should.have.been.called;
            });
        });
  });

