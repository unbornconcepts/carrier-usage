'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var broker = require('backbone.broker');
var router = require('./routes');
var React = require('react');
var routesConstants = require('./constants/routes');
var payloadSources = require('./constants/payload-sources');

var Index = React.createFactory(require('./components/index.jsx'));
React.render(new Index(), document.getElementById('app-wrapper'));

// Use GET and POST to support all browsers
// Also adds '_method' parameter with correct HTTP headers
Backbone.emulateHTTP = true;

broker.channel(payloadSources.VIEW_ACTION).subscribe(routesConstants.SET_CURRENT_ROUTE, function(payload) {
  router.navigate(payload.route, true);
});

broker.start();

console.log('Welcome to Yeogurt');
