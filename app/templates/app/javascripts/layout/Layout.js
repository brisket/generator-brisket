'use strict';

var Brisket = require('brisket');
var BaseView = require('../base/BaseView');

var Layout = Brisket.Layout.extend({

    defaultTitle: 'Your first Brisket site',

    content: '#content',

    template:
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
            '<meta charset="utf-8">\n' +
            '<title>Your first Brisket site</title>\n' +
        '</head>\n' +
        '<body>\n' +
            '<div id="content">\n' +
            '</div>\n' +
            '<script type="text/javascript" src="/javascripts/application.js"></script>\n' +
        '</body>\n' +
        '</html>\n',

    beforeRender: function() {
        this.createChildView(HeaderView)
            .andPrependItTo('body');
    }

});

var HeaderView = BaseView.extend({

    template: '<header><h1><a href="" class="logo">Brisket</a></h1></header>',

    onDOM: function() {
        var $logo = this.$('.logo');
        $logo.fadeOut(function() {
            $logo.fadeIn();
        });
    }

});

module.exports = Layout;
