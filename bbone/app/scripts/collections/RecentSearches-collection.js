/*global define*/

define([
    'underscore',
    'backbone',
    'models/RecentSearches-model'
], function (_, Backbone, RecentSearchesModel) {
    'use strict';

    var RecentSearchesCollection = Backbone.Collection.extend({
        model: RecentSearchesModel
    });

    return RecentSearchesCollection;
});