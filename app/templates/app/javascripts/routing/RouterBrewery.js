import Brisket from 'brisket';
import PageNotFoundView from '../errors/PageNotFoundView';
import DefaultErrorView from '../errors/DefaultErrorView';
import Layout from '../layout/Layout';

const RouterBrewery = Brisket.RouterBrewery.makeBreweryWithDefaults({

	layout: Layout,

	errorViewMapping: Brisket.ErrorViewMapping.create({

		404: PageNotFoundView,

		500: DefaultErrorView

	}),

  onRouteComplete(layout, request) {
    console.log('ClientApp rendered ' + request.path);

    if (request.isFirstRequest) {
      return;
    }

    window.scrollTo(0, 0);
  }

});

export default RouterBrewery;
