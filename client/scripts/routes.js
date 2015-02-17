'use strict';

var Backbone = require('backbone');
var React = require('react');
var routeActions = require('./actions/routes');
var WelcomePage = React.createFactory(require('./components/welcome.jsx'));
var HomePage = React.createFactory(require('./components/home.jsx'));

var render = function(Page) {
  React.render(new Page(), document.getElementById('page-body'));
};

var Router = Backbone.Router.extend({
  routes: {
    '': 'showWelcome',
    'home': 'showHome'
  },
  showWelcome: function() {
    render(WelcomePage);
  },
  showHome: function() {
    render(HomePage);
  }
});

module.exports = new Router();
