import express from 'express';
import Brisket from 'brisket';
import ServerApp from './app/javascripts/server/ServerApp';

const PORT = process.env.PORT || 8080;
const API_PORT = process.env.API_PORT || 8081;
const LIVERELOAD_PORT = 35729;

const SIDE_DATA = {
  'green-bean-casserole': {
    name: 'Green Bean Casserole',
    url: 'http://www.rpfit.com/wp-content/uploads/2012/05/green-bean-casserole.jpg'
  },
  'polenta': {
    name: 'Polenta',
    url: 'http://www.mezzetta.com/uploads/recipes/MZ_RecipeImage_Creamy_Polenta.png'
  },
  'greens': {
    name: 'Greens',
    url: 'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_horz/public/image/images/1203/bacon-collard-greens_gal.jpg'
  }
};


const api = express()

  .get('/side/:type', function(request, response) {
    const side = SIDE_DATA[request.params.type];

    if (!side) {
      response.status(404).json({ missing: 'side' });
    }

    response.json(side);
  })

;

const app = express()

  .use(express.static(__dirname + '/public'))

  .use(require('connect-livereload')({ port: LIVERELOAD_PORT }))

  .use(Brisket.createServer({
    debug: true,

    apis: {
      "api": {
        host: "http://localhost:8081"
      }
    },

    clientAppRequirePath: 'app/ClientApp',

    ServerApp: ServerApp,

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
      console.log('Original request was for: ' + options.request.path);
      console.log('Responded to matched route: ' + options.route);
    }

  }))

  .use(function(request, response) {
    response.status(500).sendfile(__dirname + '/public/unrecoverable-error.html');
  })
;


api.listen(API_PORT);
app.listen(PORT);

console.log('Brisket app is listening on port: %s', PORT);

require('http').get({
  hostname: 'localhost',
  port: LIVERELOAD_PORT,
  path: '/changed?files=server.js',
}, function() {
}).on('error', function() {
  console.log('could not start livereload :(');
});
