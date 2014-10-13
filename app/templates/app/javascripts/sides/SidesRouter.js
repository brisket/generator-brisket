'use strict';

var RouterBrewery = require('../routing/RouterBrewery');
var MacAndCheeseView = require('./MacAndCheeseView');
var Side = require('./Side');
var SideView = require('./SideView');

var SidesRouter = RouterBrewery.create({

    routes: {
        'sides/mac-and-cheese': 'eatMacAndCheese',
        'sides/vegetables/:type': 'eatGreens'
    },

    eatMacAndCheese: function(howMuch) {
        return new MacAndCheeseView({ howMuch: howMuch });
    },

    eatGreens: function(type) {
        var side = new Side({ type: type });

        return side.fetch()
            .then(function() {
                return new SideView({ model: side });
            });
    }

});

module.exports = SidesRouter;
