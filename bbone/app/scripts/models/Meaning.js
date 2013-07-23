/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var MeaningModel = Backbone.Model.extend({
        defaults: {
            synonims: ''
        },
    });

    return MeaningModel;
});
