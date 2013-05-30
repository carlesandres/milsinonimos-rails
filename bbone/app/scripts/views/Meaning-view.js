/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var MeaningView = Backbone.View.extend({
        tagName: 'li',
        template: JST['app/scripts/templates/Meaning.ejs'],

        render: function ( ) {
            var synonims = _.pluck( this.model.get('synonims'), 'entry');
            this.$el.html(this.template( { synonims: synonims } ));
            return this;
        }
    });

    return MeaningView;
});
