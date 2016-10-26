import express from 'express';
import Brisket from 'brisket';
import exampleApi from './exampleApi';

const PORT = process.env.PORT || 8080;
const API_PORT = process.env.API_PORT || 8081;
const LIVERELOAD_PORT = 35729;

require('./app/javascripts/server/initializeServer');

const app = express()

  .use(express.static(__dirname + '/public'))

  .use(require('connect-livereload')({ port: LIVERELOAD_PORT }))

  .use(Brisket.createServer({
    debug: true,

    apis: {
      'api': {
        host: 'http://localhost:' + API_PORT
      }
    },

    // add properties here that you want to expose to ServerApp
    //  and ClientApp
    environmentConfig: {
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

  .use(function(err, request, response, next) {
    response.status(500).sendfile(__dirname + '/public/unrecoverable-error.html');
  })
;

Brisket.onError((error, expressRequest) => {
  console.error('Error: ', error.stack || error);
  console.error('request.referrer: ', expressRequest.url);
});

exampleApi.listen(API_PORT);
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
