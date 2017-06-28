import BaseRouter from '../routing/BaseRouter';
import MacAndCheeseView from './MacAndCheeseView';
import Side from './Side';
import SideView from './SideView';

const SidesRouter = BaseRouter.extend({

  routes: {
    'sides/mac-and-cheese': 'eatMacAndCheese',
    'sides/vegetables/:type': 'eatVegetables',
    'sides/greens': 'eatGreens',
  },

  eatMacAndCheese(setLayoutData) {
    setLayoutData({
      pageType: 'cheese',
      title: 'Mac and Cheese',
      metatags: {
        description: 'Keep calm and eat Mac and Cheese'
      }
    });

    return new MacAndCheeseView();
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
        setLayoutData({
          pageType: 'side',
          title: side.get('name')
        });

        return new SideView({ model: side });
      });
  }

});

export default SidesRouter;
