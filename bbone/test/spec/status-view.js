/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'views/Status-view', 'models/search'], function (StatusView, search) {
        'use strict';

        describe('Status view', function( ) {
            before( function () {
                sinon.stub( StatusView.prototype, 'render').returns('');
                sinon.stub( StatusView.prototype, 'empty').returns('');
                this.statusview = new StatusView();
            } );

            after( function () {
                StatusView.prototype.render.restore();
                StatusView.prototype.empty.restore();
            } );

            describe('General', function () {
                it('should exist', function () {
                    this.statusview.should.exist ;
                });

                it('has a render method', function () {
                  this.statusview.render.should.be.a('function');
                });

                it('has an empty method', function () {
                  this.statusview.empty.should.be.a('function');
                });

                it('handles serverError events from search' , function () {
                    search.trigger('serverError');
                    this.statusview.render.should.have.been.called;
                });

                it('calls an "empty" method when a new searchterm is requested', function () {
                    search.trigger('request');
                    this.statusview.empty.should.have.been.called;
                });

            });
        });
    });

