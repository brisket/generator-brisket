'use strict';

var Brisket = require('brisket');

var Routers = Brisket.Routers.toUse({

    // this Router includes a catch all i.e. 404 page
    CatchAllRouter: require('./ApplicationRouter'),

    // list all other routers here e.g. require('../example/ExampleRouter')
    routers: [
        require('../home/HomeRouter'),
        require('../sides/SidesRouter')
    ]

});

module.exports = Routers;
