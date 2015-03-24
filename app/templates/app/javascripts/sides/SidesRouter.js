'use strict';

var Metatags = require("brisket").Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var MacAndCheeseView = require('./MacAndCheeseView');
var Side = require('./Side');
var SideView = require('./SideView');

var SidesRouter = RouterBrewery.create({

    routes: {
        'sides/mac-and-cheese': 'eatMacAndCheese',
        'sides/vegetables/:type': 'eatGreens'
    },

    eatMacAndCheese: function() {
        return new MacAndCheeseView()
            .withTitle('Mac and Cheese')
            .withMetatags(new Metatags({
                'description': 'Keep calm and eat Mac and Cheese'
            }));
    },

    eatGreens: function(type) {
        var side = new Side({ type: type });

        return side.fetch()
            .then(function() {
                return new SideView({ model: side })
                    .withTitle(side.get('name'));
            });
    }

});

module.exports = SidesRouter;
