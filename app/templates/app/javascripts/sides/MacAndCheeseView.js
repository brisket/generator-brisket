import BaseView from '../base/BaseView';

const IMG = 'http://sd.keepcalm-o-matic.co.uk/i/keep-calm-and-eat-mac-n-cheese-4.png';

const EatMacAndCheeseView = BaseView.extend({

  template: `<img src="${IMG}" alt="Eat Mac and Cheese">`

});

export default EatMacAndCheeseView;
