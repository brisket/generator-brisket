import BaseRouter from '../routing/BaseRouter';
import PageNotFoundView from '../errors/PageNotFoundView';

const ApplicationRouter = BaseRouter.extend({

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
