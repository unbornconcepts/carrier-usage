'use strict';

var Store = require('./default');
var Backbone = require('backbone');
var broker = require('backbone.broker');
var pageConstants = require('../constants/page');
var pageDefaults = require('../constants/defaults').page;
var payloadSources = require('../constants/payload-sources');

var _page;

var PageStore = new Store({

  // Gets metadata associated with the current page.
  get: function() {
    return _page || pageDefaults;
  }

});

broker.channel(payloadSources.VIEW_ACTION).subscribe(pageConstants.SET_CURRENT_PAGE, function(payload) {

  var action = payload.action;

  _page = action.page;
  PageStore.emitChange();

});

module.exports = PageStore;
