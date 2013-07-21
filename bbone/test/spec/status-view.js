/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'views/Status-view'], function (StatusView) {
        'use strict';

        describe('Status model', function( ) {
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
            });
        });
    });

