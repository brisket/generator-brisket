'use strict';

var RouterBrewery = require('../routing/RouterBrewery');
var HomeView = require('./HomeView');

var HomeRouter = RouterBrewery.create({

    routes: {
        '': 'home'
    },

    home: function() {
        return new HomeView();
    }

});

module.exports = HomeRouter;
