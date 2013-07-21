/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'backbone', 'models/Word-model'], function (Backbone, Wordmodel) {

        describe('Word model', function( ) {
            before( function () {
                this.word = new Wordmodel();
                this.updatespy = sinon.stub( this.word, 'fetch' );
            } );

            after( function () {
                this.word.fetch.restore();
            } );

            it('should exist', function () {
                this.word.should.exist ;
            });

            it('should have an initialize method', function () {
                this.word.initialize.should.be.defined;
            });

            it('calls the fetch method when id changes', function () {
                this.word.set( 'id', 'whatever' );
                this.updatespy.should.have.been.called;
            });
        });
  });

