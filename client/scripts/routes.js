'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var pageActions = require('./actions/page');

Backbone.$ = $;

var Router = Backbone.Router.extend({
  routes: {
    '': 'showWelcome',
    'app/:page': 'showPage'
  },

  showWelcome: function() {
    this.setPageAction('welcome', React.createFactory(require('./components/welcome.jsx')));
  },

  showPage: function(pageName) {
    // using require here for pages is necessary to avoid circular reference with
    // the link component that handles the page transitions
    var pages = {
      'about': React.createFactory(require('./components/about.jsx')),
      'docs': React.createFactory(require('./components/docs.jsx'))
    };
    var Page = pages[pageName];
    this.setPageAction(pageName, Page);
  },

  setPageAction: function(title, Page) {
    pageActions.set({title: title, content: new Page()});
  }
});

module.exports = new Router();
