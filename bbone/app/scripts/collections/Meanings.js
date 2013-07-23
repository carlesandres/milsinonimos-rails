/*global define*/

define([
    'underscore',
    'backbone',
    'models/Meaning',
], function (_, Backbone, Meaning) {
    'use strict';

    var Meanings = Backbone.Collection.extend({
        model: Meaning,
    });

    return Meanings;
});
