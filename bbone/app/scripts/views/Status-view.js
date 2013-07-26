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
        template: JST['app/scripts/templates/Status.ejs'],

        render: function () {

        }
    });

    return StatusView;
});
