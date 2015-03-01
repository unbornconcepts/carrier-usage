'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var broker = require('backbone.broker');
var router = require('./router');
var React = require('react');
var payloadSources = require('./constants/payload-sources');

var Index = React.createFactory(require('./components/index.jsx'));
React.render(new Index(), document.getElementById('app-wrapper'));

broker.start();

// Use GET and POST to support all browsers
// Also adds '_method' parameter with correct HTTP headers
Backbone.emulateHTTP = true;

// Enable pushState for compatible browsers
var enablePushState = true;

// Detect is pushState is available
var pushState = !!(enablePushState && window.history && window.history.pushState);

if (pushState) {
  // Start listening to route changes with pushState
  Backbone.history.start({ pushState: true, root: '/' });
} else {
  // Start listening to route changes without pushState
  Backbone.history.start();
}

// Handle pushState for incompatible browsers (IE9 and below)
if (!pushState && window.location.pathname !== '/') {
  window.location.replace('/#' + window.location.pathname);
}

console.log('Welcome to Yeogurt');
