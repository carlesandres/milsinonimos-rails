/*global describe, it */
'use strict';

define( ['models/Word-model'] , function ( word ) {
    return describe('Word-model', function () {
        describe('Give it some context', function () {
            describe('maybe a bit more context here', function () {
                it('should run here few assertions', function () {
                  var foo = "string";
                  foo.should.be.a('string');
                  //var a = new Word


                });
            });
        });

        describe('Querying /words/palabra', function () {
            it('should return an 200 response', function () {

            });
        });
    });
} );
