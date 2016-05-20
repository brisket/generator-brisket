import { Layout } from 'brisket';
import BaseRouter from '../routing/BaseRouter';
import HomeView from './HomeView';

const { OpenGraphTags, Metatags } = Layout;

const HomeRouter = BaseRouter.extend({

  routes: {
    '': 'home'
  },

  home() {
    const description = 'This is the homepage for your first Brisket site';
    const title = 'Welcome to your first Brisket site!';

    return new HomeView()
      .withTitle(title)
      .withMetatags([
        new Metatags({
          'description': description,
          'twitter:title': title,
          'twitter:description': description
        }),
        new OpenGraphTags({
          'og:title': title,
          'og:description': description
        })
      ]);
  }

});

export default HomeRouter;
