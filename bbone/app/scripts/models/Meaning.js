/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var Meaning = Backbone.Model.extend({
        defaults: {
            synonims: ''
        },
    });

    return Meaning;
});
