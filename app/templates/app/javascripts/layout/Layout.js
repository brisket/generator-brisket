import Brisket from 'brisket';
import BaseView from '../base/BaseView';

const Layout = Brisket.Layout.extend({

  defaultTitle: 'Your first Brisket site',

  content: '#content',

  initialize() {
    this.model.on({
      'change:pageType': this.updatePageType
    }, this);
  },

  beforeRender() {
    this.createChildView('header', HeaderView);
  },

  template({ views, pageType = 'normal' }) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset='utf-8'>
        <title>Your first Brisket site</title>
      </head>
      <body class='type-${ pageType }'>
        ${views.header}

        <div id='content'></div>

        <script type='text/javascript' src='/javascripts/application.js' async></script>
      </body>
      </html>
    `
  },

  updatePageType(model, pageType = 'normal') {
    document.body.className = document.body.className.replace(/type-[^\b]+/, `type-${ pageType }`);
  }

});

const HeaderView = BaseView.extend({

  template: `
    <header>
      <h1>
        <a href='' class='logo'>Brisket</a>
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
