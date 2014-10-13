'use strict';

var BaseView = require('../base/BaseView');

var DefaultErrorView = BaseView.extend({
    template: '<h1 style="color: #C00;">500 - There was an error serving the page</h1>'
});

module.exports = DefaultErrorView;
