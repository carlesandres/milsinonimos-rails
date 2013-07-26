/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'jquery', 'backbone', 'views/App-view'], function ($, Backbone, AppView) {
        'use strict';

        describe('App view', function( ) {
            before( function () {
                this.server = sinon.fakeServer.create();
                this.spy = sinon.stub( AppView.prototype, 'handleResults' ).returns('');
                this.appview = new AppView();
                this.appview.router = {};
                this.appview.model = new Backbone.Model( { id: 'casa' });
                this.appview.model.url = 'sinonimos';
                this.appview.model.entry = 'sinonimos';
            } );

            after( function () {
                AppView.prototype.handleResults.restore();
                this.server.restore();
            } );

            describe('it', function () {
                it('exists', function () {
                    this.appview.should.exist ;
                });
            });

            describe('the prevent method', function () {
                it('exists', function () {
                    this.appview.prevent.should.be.a('function'); ;
                });
            });

            describe.skip('handleResults', function () {
                it('exists', function () {
                    this.appview.handleResults.should.be.a('function'); ;
                });

                it('calls the handleResults method when its model syncs', function (done) {
                    this.spy.should.have.been.called;
                    this.appview.model.fetch( { success: function ( ) {
                      done();
                    }, error: function ( ) {
                      done();
                    } } );
                    this.server.respondWith(
                       200,
                       { "Content-Type": "application/json" },
                       JSON.stringify( [ { id: "casa", text: "Something" } ] )
                    );
                    this.server.respond();
                });
            });

            it('calls the onServerError method search fetching fails');
            it('triggers an special log event which is listened by the searchlog model');
            it('delegates to ResultsView its own refreshing');

        });
    });

