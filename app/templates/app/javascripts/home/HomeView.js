import BaseView from '../base/BaseView';

const HomeView = BaseView.extend({

  className: 'homepage',

  template: `
    <h1>Welcome to your first Brisket site!</h1>

    <h2>Check out the sides</h2>
    <strong>Standard route:</strong> <a href="sides/mac-and-cheese">Eat Mac and Cheese</a>
    <br>
    <br>
    <strong>Routes with ajax:</strong>
    <br>
    <a href="sides/vegetables/green-bean-casserole">Green Bean Casserole</a>
    <br>
    <a href="sides/vegetables/polenta">Polenta</a>

    <h2>Error pages</h2>
    <a href="404">Not found</a>
    <br>
    <a href="500">Default Error View</a>
  `
});

export default HomeView;
