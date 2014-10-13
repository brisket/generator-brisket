'use strict';

var BaseModel = require('../base/BaseModel');

var Side = BaseModel.extend({

    idAttribute: 'type',

    urlRoot: '/api/side'

});

module.exports = Side;
