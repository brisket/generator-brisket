'use strict';

var express = require('express');
var Brisket = require('brisket');

var PORT = process.env.PORT || 8080;
var SIDE_DATA = {
    'green-bean-casserole': {
        name: 'Green Bean Casserole',
        url: 'http://www.rpfit.com/wp-content/uploads/2012/05/green-bean-casserole.jpg'
    },
    'polenta': {
        name: 'Polenta',
        url: 'http://www.mezzetta.com/uploads/recipes/MZ_RecipeImage_Creamy_Polenta.png'
    }
};

var app = express()

    .use(express.static(__dirname + '/public'))

    .use('/api', express.Router()

        .get('/side/:type', function(request, response) {
            var side = SIDE_DATA[request.params.type];

            if (!side) {
                response.status(404).json({ missing: 'side' });
            }

            response.json(side);
        })

    )

    .use(Brisket.createServer({
        apiHost: 'http://localhost:' + PORT,

        clientAppRequirePath: 'app/ClientApp',

        ServerApp: require('./app/javascripts/server/ServerApp'),

        // add properties here that you want to expose to ServerApp
        //  and ClientApp
        environmentConfig: {
            clientAppUrl: '/javascripts/application.js',
            favoriteTown: 'Brisket Town'
        },

        // add properties that you only want to expose to the ServerApp
        serverConfig: {
            favoriteServer: 'a plate'
        },

        onRouteHandled: function(options) {
            console.log("Original request was for: " + options.request.path);
            console.log("Responded to matched route: " + options.route);
        }

    }))

    .use(function(request, response) {
        response.status(500).sendfile(__dirname + '/public/unrecoverable-error.html');
    })
;


app.listen(PORT);
console.log("Brisket app is listening on port: %s", PORT);
