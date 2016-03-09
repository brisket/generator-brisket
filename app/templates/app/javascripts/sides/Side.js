import BaseModel from '../base/BaseModel';

const Side = BaseModel.extend({

  idAttribute: 'type',

  urlRoot: '/api/side'

});

export default Side;
