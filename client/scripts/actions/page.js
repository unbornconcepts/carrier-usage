'use strict';

var broker = require('backbone.broker');
var routesConstants = require('../constants/routes');
var payloadSources = require('../constants/payload-sources');
var pageConstants = require('../constants/page');
var pageDefaults = require('../constants/defaults').page;
var assign = require('object-assign');

module.exports = {

  set: function(page) {
    broker.channel(payloadSources.VIEW_ACTION).publish(pageConstants.SET_CURRENT_PAGE, {
      actionType: pageConstants.SET_CURRENT_PAGE,
      page: assign({}, pageDefaults, page)
    });
  }

};
