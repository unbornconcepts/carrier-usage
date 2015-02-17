'use strict';

var broker = require('backbone.broker');
var routesConstants = require('../constants/routes');
var payloadSources = require('../constants/payload-sources');

module.exports = {

  setRoute: function(route) {
    broker.channel(payloadSources.VIEW_ACTION).publish(routesConstants.SET_CURRENT_ROUTE,{
      actionType: routesConstants.SET_CURRENT_ROUTE,
      route: route
    });
  }

};
