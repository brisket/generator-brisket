import { Backbone } from 'brisket';

const Side = Backbone.Model.extend({

  idAttribute: 'type',

  urlRoot: '/api/side'

});

export default Side;
