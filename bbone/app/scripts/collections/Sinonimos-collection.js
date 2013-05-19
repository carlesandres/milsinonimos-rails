/*global define*/

define([
    'underscore',
    'backbone',
    'models/Sinonimos-model'
], function (_, Backbone, SinonimosModel) {
    'use strict';

    var SinonimosCollection = Backbone.Collection.extend({
        model: SinonimosModel
    });

    return SinonimosCollection;
});