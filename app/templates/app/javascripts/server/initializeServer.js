import { App, version } from 'brisket';

require('../routing/initializeRouters');

App.addServerInitializer(({ environmentConfig, serverConfig }) => {
    // do server-only app set up here
    console.log('My favorite town is ' + environmentConfig.favoriteTown);
    console.log('My favorite server is ' + serverConfig.favoriteServer);
    console.log('ServerApp has started with Brisket version ' + version);
});
