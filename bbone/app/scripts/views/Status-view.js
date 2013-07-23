/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var StatusView = Backbone.View.extend({
        template: JST['app/scripts/templates/Status.ejs'],

        render: function () {

        }
    });

    return StatusView;
});
