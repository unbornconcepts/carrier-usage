'use strict';

var _ = require('lodash');
var React = require('react');
var Router = require('director').Router;
var pageActions = require('./actions/page');

// Enable pushState for compatible browsers
var enablePushState = true;

var showPage = function(title) {
  var pages = {
    'welcome': React.createFactory(require('./components/welcome.jsx')),
    'home': React.createFactory(require('./components/home.jsx'))
  };
  var Page = pages[title];
  pageActions.set({title: title, content: new Page()});
};

// Setup router
var router = new Router({
  '/': _.partial(showPage, 'welcome'),
  '/home': _.partial(showPage, 'home')
});

// Detect is pushState is available
var pushState = !!(enablePushState && window.history && window.history.pushState);

if (pushState) {
  // Start listening to route changes with pushState
  router.configure({
    html5history: true
  });
}

// Handle pushState for incompatible browsers (IE9 and below)
if (!pushState && window.location.pathname !== '/') {
  window.location.replace('/#' + window.location.pathname);
}

module.exports = router;
