/*global define*/

define([
    'underscore',
    'backbone',
    'models/RecentAdditions-model'
], function (_, Backbone, RecentAdditionsModel) {
    'use strict';

    var RecentAdditionsCollection = Backbone.Collection.extend({
        model: RecentAdditionsModel
    });

    return RecentAdditionsCollection;
});