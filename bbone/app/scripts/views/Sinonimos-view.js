/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var SinonimosView = Backbone.View.extend({
        template: JST['app/scripts/templates/Sinonimos.ejs']
    });

    return SinonimosView;
});