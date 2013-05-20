/*global define*/

define([
    'underscore',
    'backbone',
    'models/Meaning-model'
], function (_, Backbone, MeaningModel) {
    'use strict';

    var MeaningCollection = Backbone.Collection.extend({
        model: MeaningModel,

        initialize: function ( ) {
            this.searchedterm = '';
        }


    });

    return MeaningCollection;
});
