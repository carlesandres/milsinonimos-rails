/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'backbone', 'models/search'], function (Backbone, search) {

        describe('Search model', function( ) {
            before( function () {
                this.updatespy = sinon.stub( search, 'fetch' );
            } );

            after( function () {
                search.fetch.restore();
            } );

            it('should exist', function () {
                search.should.exist ;
            });

            it('should have an initialize method', function () {
                search.initialize.should.be.defined;
            });

            it('calls the fetch method when id changes', function () {
                search.set( 'id', 'whatever' );
                this.updatespy.should.have.been.called;
            });
        });
  });

