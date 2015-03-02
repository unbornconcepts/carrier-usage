'use strict';

var broker = require('backbone.broker');
var payloadSources = require('../constants/payload-sources');
var sideBarConstants = require('../constants/side-bar');

module.exports = {

  toggle: function() {
    broker.channel(payloadSources.SIDE_BAR_ACTION).publish(sideBarConstants.TOGGLE);
  }

};
