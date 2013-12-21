/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'models/Word'], function (Word) {

    describe('Word model', function( ) {
        before( function () {
            var word = new Word();
        } );

        after( function () {
        } );

        it('has en "entry" property');
        it('validates the "entry" property');

    });
});
