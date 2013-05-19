/*global define*/

define([
    'underscore',
    'backbone',
    'models/TopSearches-model'
], function (_, Backbone, TopSearchesModel) {
    'use strict';

    var TopSearchesCollection = Backbone.Collection.extend({
        model: TopSearchesModel
    });

    return TopSearchesCollection;
});