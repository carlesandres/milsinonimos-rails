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
            this.meanings = new MeaningsCollection( );
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
            console.log( 'Model has been updated' );
            console.log( this.get('meanings').at(1).get('synonims') );
        },

        urlRoot: '/sinonimos'
    });

    return new WordModel();
});
