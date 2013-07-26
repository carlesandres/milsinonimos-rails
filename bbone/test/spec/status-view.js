/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'views/Status-view'], function (StatusView) {
        'use strict';

        describe('Status view', function( ) {
            before( function () {
                this.statusview = new StatusView();
            } );

            after( function () {
                //this.word.fetch.restore();
            } );

            describe('General', function () {
                it('should exist', function () {
                    this.statusview.should.exist ;
                });

                it('has a render method', function () {
                  this.statusview.render.should.be.defined;
                });

                it('has a reference to the search object');
                it('handles serverError events from search');
                it('handles timeout events from search');
                it('handles search fetch events clearing the view');



            });
        });
    });

