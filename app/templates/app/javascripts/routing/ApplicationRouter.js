import BaseRouter from '../routing/BaseRouter';
import PageNotFoundView from '../errors/PageNotFoundView';

const ApplicationRouter = BaseRouter.extend({

  routes: {
    '*undefined': 'pageNotFound',
    '500': 'errorPage'
  },

  pageNotFound(missingRoute, layout, request, response) {
    response.status(404);

    return new PageNotFoundView();
  },

  errorPage() {
    throw new Error('testing what happens when route has an error');
  }

});

export default ApplicationRouter;
