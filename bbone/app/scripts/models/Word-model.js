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
        },

        update: function () {
            this.fetch();
        },

        parse: function (response) {
            response.meanings = new MeaningsCollection(response.meanings);
            return response;
        },

        urlRoot: '/sinonimos'
    });

    return new WordModel();
});
