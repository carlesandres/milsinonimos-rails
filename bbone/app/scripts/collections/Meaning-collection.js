/*global define*/

define([
    'underscore',
    'backbone',
    'models/Meaning-model',
], function (_, Backbone, Meaning) {
    'use strict';

    var Meanings = Backbone.Collection.extend({
        model: Meaning,
    });

    return Meanings;
});
