import Brisket from 'brisket';
import Routers from '../routing/Routers';

const ClientApp = Brisket.ClientApp.extend({

  routers: Routers,

  start({ environmentConfig }) {
    // do client-only app set up here
    console.log('My favorite town is ' + environmentConfig.favoriteTown);
    console.log('ClientApp has started with Brisket version ' + Brisket.version);

    Brisket.onError((error, clientRequest) => {
      console.error("Error: ", error);
      console.error("request.referrer: ", clientRequest.referrer);
    });
  }

});

export default ClientApp;
