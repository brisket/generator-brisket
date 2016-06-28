import Brisket from 'brisket';
import BaseView from '../base/BaseView';

const Layout = Brisket.Layout.extend({

  defaultTitle: 'Your first Brisket site',

  content: '#content',

  beforeRender() {
    this.createChildView('header', HeaderView);
  },

  template({ views }) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Your first Brisket site</title>
      </head>
      <body>
        ${views.header}

        <div id="content"></div>

        <script type="text/javascript" src="/javascripts/application.js" async></script>
      </body>
      </html>
    `
  }

});

const HeaderView = BaseView.extend({

  template: `
    <header>
      <h1>
        <a href="" class="logo">Brisket</a>
      </h1>
    </header>
  `,

  onDOM() {
    const $logo = this.$('.logo');

    $logo.fadeOut(function() {
        $logo.fadeIn();
    });
  }

});

export default Layout;
