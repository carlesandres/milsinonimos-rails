/*global define*/

define([
    'underscore',
    'backbone',
    'collections/Meaning-collection',
], function (_, Backbone, MeaningsCollection) {
    'use strict';

    var WordModel = Backbone.Model.extend({
        defaults: {
        },

        initialize: function () {
            this.collection = new MeaningsCollection( [], { parent: this });
        },

        urlRoot: '/sinonimos'
    });

    return WordModel;
});
