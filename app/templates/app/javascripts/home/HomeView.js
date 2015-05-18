'use strict';

var BaseView = require('../base/BaseView');

var HomeView = BaseView.extend({
    template: '<h1>Welcome to your first Brisket site!</h1>' +

        '<h2>Check out the sides</h2>' +
        '<strong>Standard route:</strong> <a href="/sides/mac-and-cheese">Eat Mac and Cheese</a> ' +
        '<br>' +
        '<br>' +
        '<strong>Routes with ajax:</strong>' +
        '<br>' +
        '<a href="sides/vegetables/green-bean-casserole">Green Bean Casserole</a> ' +
        '<br>' +
        '<a href="sides/vegetables/polenta">Polenta</a>' +

        '<h2>Check out the error page</h2>' +
        '<a href="500">Default Error View</a>'
});

module.exports = HomeView;
