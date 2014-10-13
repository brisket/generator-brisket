'use strict';

var BaseView = require('../base/BaseView');

var SideView = BaseView.extend({

    template: '<section class="side"><h1></h1></section>',

    afterRender: function() {
        this.$('h1').html(this.model.get('name'));
    },

    onDOM: function() {
        this.$('.side').append('<img src="' + this.model.get('url') + '">');
    }

});

module.exports = SideView;
