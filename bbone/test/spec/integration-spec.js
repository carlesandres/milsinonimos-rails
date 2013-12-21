/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'jquery', 'backbone', 'views/App-view', '../app/scripts/routes/Router'], function ($, Backbone, AppView, Router) {

        'use strict';

        describe('Integration', function( ) {
            before( function () {
                var router = new Router();
                router.view = new AppView( { router: router } );
                this.server = sinon.fakeServer.create();
            });

            after( function () {
                this.server.restore();
            });

            it('sends a request to the server when searchbox contents change') , function() {
                $('#searchbox').trigger($.Event('keydown', {which: 68}));
                $('#searchbox').trigger($.Event('keyup', {which: 68}));


            }



        });

    });

