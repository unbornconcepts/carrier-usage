'use strict';

var broker = require('backbone.broker');
var payloadSources = require('../constants/payload-sources');

var DefaultDispatcher = {
  handleViewAction: function(action) {
    broker.channel(payloadSources.VIEW_ACTION).publish(action.actionType, action);
  }
};

module.exports = DefaultDispatcher;
