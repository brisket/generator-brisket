'use strict';

var Brisket = require('brisket');
var Routers = require('../routing/Routers');

var ServerApp = Brisket.ServerApp.extend({

    routers: Routers,

    start: function(options) {
        var environmentConfig = options.environmentConfig;
        var serverConfig = options.serverConfig;

        // do server-only app set up here
        console.log('My favorite town is ' + environmentConfig.favoriteTown);
        console.log('My favorite server is ' + serverConfig.favoriteServer);
        console.log('ServerApp has started with Brisket version ' + Brisket.version);
    }

});

module.exports = ServerApp;
