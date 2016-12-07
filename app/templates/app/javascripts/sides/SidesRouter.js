import { Layout } from 'brisket';
import BaseRouter from '../routing/BaseRouter';
import MacAndCheeseView from './MacAndCheeseView';
import Side from './Side';
import SideView from './SideView';

const Metatags = Layout.Metatags;

const SidesRouter = BaseRouter.extend({

  routes: {
    'sides/mac-and-cheese': 'eatMacAndCheese',
    'sides/vegetables/:type': 'eatVegetables',
    'sides/greens': 'eatGreens',
  },

  eatMacAndCheese(setLayoutData) {
    setLayoutData('pageType', 'cheese');

    return new MacAndCheeseView()
      .withTitle('Mac and Cheese')
      .withMetatags([
        new Metatags({
          'description': 'Keep calm and eat Mac and Cheese'
        })
      ]);
  },

  eatGreens(setLayoutData, request) {
    return this.eatVegetables('greens', setLayoutData, request);
  },

  eatVegetables(type, setLayoutData, request) {
    const side = new Side({ type: type });

    request.onComplete(function() {
        setLayoutData('pageType', 'side-finished');
    });

    return side.fetch()
      .then(function() {
        setLayoutData('pageType', 'side');

        return new SideView({ model: side })
          .withTitle(side.get('name'));
      });
  }

});

export default SidesRouter;
