import RouterBrewery from '../routing/RouterBrewery';
import PageNotFoundView from '../errors/PageNotFoundView';

const ApplicationRouter = RouterBrewery.create({

  routes: {
    '*undefined': 'pageNotFound',
    '500': 'errorPage'
  },

  pageNotFound: function() {
    return new PageNotFoundView();
  },

  errorPage: function() {
    throw new Error('testing what happens when route has an error');
  }

});

export default ApplicationRouter;
