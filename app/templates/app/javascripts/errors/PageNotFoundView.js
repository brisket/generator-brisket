'use strict';

var BaseView = require('../base/BaseView');

var PageNotFoundView = BaseView.extend({
    template: '<h1 style="color: #C00;">404 - Page Not Found</h1>'
});

module.exports = PageNotFoundView;
