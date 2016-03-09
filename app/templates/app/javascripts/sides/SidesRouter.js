import { Layout } from 'brisket';
import RouterBrewery from '../routing/RouterBrewery';
import MacAndCheeseView from './MacAndCheeseView';
import Side from './Side';
import SideView from './SideView';

const Metatags = Layout.Metatags;

const SidesRouter = RouterBrewery.create({

  routes: {
    'sides/mac-and-cheese': 'eatMacAndCheese',
    'sides/vegetables/:type': 'eatGreens'
  },

  eatMacAndCheese: function() {
    return new MacAndCheeseView()
      .withTitle('Mac and Cheese')
      .withMetatags([
        new Metatags({
          'description': 'Keep calm and eat Mac and Cheese'
        })
      ]);
  },

  eatGreens: function(type) {
    const side = new Side({ type: type });

    return side.fetch()
      .then(function() {
        return new SideView({ model: side })
          .withTitle(side.get('name'));
      });
  }

});

export default SidesRouter;
