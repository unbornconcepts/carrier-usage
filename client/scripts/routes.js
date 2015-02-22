'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var pageActions = require('./actions/page');

Backbone.$ = $;

var Router = Backbone.Router.extend({
  routes: {
    '/': 'welcome',
    '/app/:page': 'showPage'
  },

  showWelcome: function() {
    this.showPage('welcome');
  },

  showPage: function(title) {
    // using require here for pages is necessary to avoid circular reference with
    // the link component that handles the page transitions
    var pages = {
      'welcome': React.createFactory(require('./components/welcome.jsx')),
      'about': React.createFactory(require('./components/about.jsx')),
      'docs': React.createFactory(require('./components/docs.jsx'))
    };
    var Page = pages[title];
    pageActions.set({title: title, content: new Page()});
  }
});

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


module.exports = new Router();
