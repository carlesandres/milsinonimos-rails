/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var Word = Backbone.Model.extend({
        defaults: {
            entry: '',
        }
    });

    return Word;
});
