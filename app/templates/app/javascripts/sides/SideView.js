import BaseView from '../base/BaseView';

const SideView = BaseView.extend({

  template({ name }) {
    return `
      <section class="side">
        <h1>${name}</h1>
      </section>
    `;
  },

  onDOM() {
    const url = this.model.get('url');

    this.$('.side').append(`<img src="${url}">`);
  }

});

export default SideView;
