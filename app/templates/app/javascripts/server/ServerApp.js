import Brisket from 'brisket';
import Routers from '../routing/Routers';

const ServerApp = Brisket.ServerApp.extend({

  routers: Routers,

  start({ environmentConfig, serverConfig }) {
    // do server-only app set up here
    console.log('My favorite town is ' + environmentConfig.favoriteTown);
    console.log('My favorite server is ' + serverConfig.favoriteServer);
    console.log('ServerApp has started with Brisket version ' + Brisket.version);
  }

});

export default ServerApp;
