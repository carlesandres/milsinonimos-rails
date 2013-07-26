/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/search'
], function ($, _, Backbone, JST, search) {
    'use strict';

    var StatusView = Backbone.View.extend({
        el: '#status',
        template: JST['app/scripts/templates/Status.ejs'],

        initialize: function( ) {
            this.listenTo( search, 'serverError', this.render);
            this.listenTo( search, 'request', this.empty);
        },

        render: function () {
            this.$el.html(this.template( { text: 'Error de comunicación con el servidor.' } ));
            return this;
        },

        empty: function () {
            this.$el.html(this.template( { text: '' } ));
            return this;
        },
    });

    return StatusView;
});
