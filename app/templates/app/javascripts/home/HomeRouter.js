'use strict';

var Metatags = require('brisket').Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var HomeView = require('./HomeView');

var HomeRouter = RouterBrewery.create({

    routes: {
        '': 'home'
    },

    home: function() {
        var description = 'This is the homepage for your first Brisket site';
        var title = 'Welcome to your first Brisket site!';

        return new HomeView()
            .withTitle(title)
            .withMetatags(new Metatags({
                'description': description,
                'og:title': title,
                'og:description': description,
                'twitter:title': title,
                'twitter:description': description
            }));
    }

});

module.exports = HomeRouter;
