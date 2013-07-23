/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'jquery', 'backbone', 'views/App-view'], function ($, Backbone, AppView) {
        'use strict';

        describe('Appview view', function( ) {
            before( function () {
                this.appview = new AppView();
                this.appview.router = {};
                // this.appview.model = new Backbone.Model( { id: 'casa' });
                // this.appview.model.url = 'sinonimos';
                // this.appview.model.entry = 'sinonimos';
            } );

            after( function () {
                //this.word.fetch.restore();
            } );

            describe('General', function () {
                it('should exist', function () {
                    this.appview.should.exist ;
                });
            });

            describe('handleResults', function () {
                var xhr, server;
                before( function () {
                    server = sinon.fakeServer.create();
                });

                after( function () {
                    server.restore();
                });

                it('has a handleResults method', function () {
                    this.appview.handleResults.should.exist ;
                });

                it('calls the handleResults method when its model syncs', function () {
                    var spy = sinon.stub( this.appview, 'handleResults' ).returns('');
                    this.appview.model.fetch();
                    server.requests[0].respond( 
                       200,
                       { "Content-Type": "application/json" },
                       JSON.stringify( [ { id: "casa", text: "Something" } ] )
                    );
                    console.log( server.requests );
                    spy.should.have.been.called;
                });
            });

            describe('the prevent method', function () {
                it('should have a prevent method', function () {
                    this.appview.prevent.should.be.defined;
                });
            });
        });
    });

