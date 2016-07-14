import { App, version, onError } from 'brisket';

require('../routing/initializeRouters');

App.addClientInitializer(({ environmentConfig }) => {
  console.log('My favorite town is ' + environmentConfig.favoriteTown);
  console.log('ClientApp has started with Brisket version ' + version);

  onError((error, clientRequest) => {
    console.error("Error: ", error.stack || error);
    console.error("request.referrer: ", clientRequest.referrer);
  });
});

App.start();
