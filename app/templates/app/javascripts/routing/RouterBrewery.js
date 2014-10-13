'use strict';

var Brisket = require('brisket');

var RouterBrewery = Brisket.RouterBrewery.makeBreweryWithDefaults({

	layout: require('../layout/Layout'),

	errorViewMapping: Brisket.ErrorViewMapping.create({

		404: require('../errors/PageNotFoundView'),

		500: require('../errors/DefaultErrorView')

	}),

    onRouteComplete: function(layout, request) {
        console.log('ClientApp rendered ' + request.path);

        if (request.isFirstRequest) {
            return;
        }

        window.scrollTo(0, 0);
    }

});

module.exports = RouterBrewery;
