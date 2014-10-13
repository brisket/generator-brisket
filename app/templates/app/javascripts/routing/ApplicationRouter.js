'use strict';

var RouterBrewery = require('../routing/RouterBrewery');
var PageNotFoundView = require('../errors/PageNotFoundView');
var DefaultErrorView = require('../errors/DefaultErrorView');

var ApplicationRouter = RouterBrewery.create({

    routes: {
        '*undefined': 'pageNotFound',
        '500': 'errorPage'
    },

    pageNotFound: function() {
        return new PageNotFoundView();
    },

    errorPage: function() {
        return new DefaultErrorView();
    }

});

module.exports = ApplicationRouter;
