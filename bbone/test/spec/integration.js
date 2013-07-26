/*global describe, it, after, before, define, sinon, should, be */
'use strict';

define([ 'jquery', 'backbone', 'views/App-view', '../app/scripts/routes/Router'], 
          function ($, Backbone, AppView, Router) {
        'use strict';

        describe('Integration', function( ) {
            before( function () {
                //this.server = sinon.fakeServer.create();
                //this.spy = sinon.stub( AppView.prototype, 'handleResults' ).returns('');
                //this.appview = new AppView();
                //this.appview.router = {};
                //this.appview.model = new Backbone.Model( { id: 'casa' });
                //this.appview.model.url = 'sinonimos';
                //this.appview.model.entry = 'sinonimos';
            } );

            it('should test the browser-side code as a whole');

            it('sends a request for a new search when searchbox input changes');
            it('updates the results view when a word definition is retrieved');
      });
});
