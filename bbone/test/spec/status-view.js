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
                it('has a reference to the Word model');
                it('listens to errors on word updates from the server');
                it('renders an error message when Word update fails');
                it('clears the view when Word attempts to update');



            });
        });
    });

