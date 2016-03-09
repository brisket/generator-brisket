import BaseView from '../base/BaseView';

const PageNotFoundView = BaseView.extend({
  template: `
    <h1 style="color: #C00;">
      404 - Page Not Found
    </h1>
  `
});

export default PageNotFoundView;
