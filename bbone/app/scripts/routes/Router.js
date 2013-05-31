/*global define*/

define([
    'jquery',
    'backbone',
    'views/App-view',
    'collections/Meaning-collection',
], function ($, Backbone, AppView, word, MeaningsCollection) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            ':word': 'updateWord'
        },

        initialize: function () {
            var route = this;
            Backbone.history.start( { pushState: true, hashChange: false } );
            $(document).on('click', 'a:not([data-bypass])', function (evt) {

                var href = $(this).attr('href');
                var protocol = this.protocol + '//';

                if (href.slice(protocol.length) !== protocol) {
                    evt.preventDefault();
                    route.navigate(href, true);
                }
            });

            this.view = new AppView();
            this.collection = new MeaningsCollection( );
        },

        updateWord: function( searchedterm ) {
            $('#searchbox').val( searchedterm );
            this.view.trySearch();
        },
    });

    return AppRouter;
});
