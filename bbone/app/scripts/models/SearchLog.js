/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var SearchModel = Backbone.Model.extend({
        defaults: {
            entry: ''
        },

        initialize: function () {
            this.save();
        },

        parse: function (response) {
            response.status = response.status || 'ok';
            return response;
        },

        urlRoot: '/searches'
    });

    return SearchModel;
});
