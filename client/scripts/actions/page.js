'use strict';

var _ = require('lodash');
var broker = require('backbone.broker');
var payloadSources = require('../constants/payload-sources');
var pageConstants = require('../constants/page');
var pageDefaults = require('../constants/defaults').page;

module.exports = {

  set: function(page) {
    broker.channel(payloadSources.VIEW_ACTION).publish(pageConstants.SET_CURRENT_PAGE, {
      actionType: pageConstants.SET_CURRENT_PAGE,
      page: _.extend({}, pageDefaults, page)
    });
  }

};
