/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'views/App-view'], function (AppView) {
        'use strict';

        describe('Appview model', function( ) {
            before( function () {
                this.appview = new AppView();
                this.appview.router = {};
            } );

            after( function () {
                //this.word.fetch.restore();
            } );

            describe('General', function () {
                it('should exist', function () {
                    this.appview.should.exist ;
                });

                it('should display an error message when there is an error response');

                it('has a handleResults method', function () {
                    this.appview.handleResults.should.exist ;
                });

                it.skip('calls the handleResults method when its model syncs', function () {
                    var spy = sinon.stub( this.appview, 'handleResults' );
                    this.appview.model.trigger('sync');
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

