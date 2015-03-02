'use strict';

var Backbone = require('backbone');
var broker = require('backbone.broker');
var pageConstants = require('../constants/page');
var sideBarConstants = require('../constants/side-bar');
var pageDefaults = require('../constants/defaults').page;
var payloadSources = require('../constants/payload-sources');

var PageStore = Backbone.Model.extend({
  defaults: pageDefaults
});

var pageStore = new PageStore();

broker.channel(payloadSources.VIEW_ACTION).subscribe(pageConstants.SET_CURRENT_PAGE, function(payload) {
  pageStore.set(payload.page);
});

broker.channel(payloadSources.SIDE_BAR_ACTION).subscribe(sideBarConstants.TOGGLE, function() {
  pageStore.set('sideBarVisible', pageStore.get('sideBarVisible') ? false : true);
});

module.exports = pageStore;
