/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var ResultsView = Backbone.View.extend({
        template: JST['app/scripts/templates/Results.ejs'],

        initialize: function () {
            this.listenTo( this.collection, 'sync', this.render );
        },

        render: function () {
            console.log( 'rendering collection' );
        }

    });

    return ResultsView;
});
