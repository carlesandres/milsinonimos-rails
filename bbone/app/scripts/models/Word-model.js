/*global define*/

define([
    'underscore',
    'backbone',
    'collections/Meaning-collection',
], function (_, Backbone, MeaningsCollection) {
    'use strict';

    var WordModel = Backbone.Model.extend({
        defaults: {
            entry: '',
            id: '',
        },

        initialize: function () {
            this.on('change:id', this.update, this);
            this.on('sync', this.afterUpdate, this);
        },

        update: function () {
            this.fetch();
        },

        parse: function (response) {
            response.meanings = new MeaningsCollection(response.meanings);
            return response;
        },

        afterUpdate: function () {
        },

        urlRoot: '/sinonimos'
    });

    return new WordModel();
});
