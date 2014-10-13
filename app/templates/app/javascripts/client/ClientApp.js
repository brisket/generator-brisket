'use strict';

var Brisket = require('brisket');
var Routers = require('../routing/Routers');

var ClientApp = Brisket.ClientApp.extend({

    routers: Routers,

    start: function(options) {
        var environmentConfig = options.environmentConfig;

        // do client-only app set up here
        console.log('My favorite town is ' + environmentConfig.favoriteTown);
        console.log('ClientApp has started');
    }

});

module.exports = ClientApp;
