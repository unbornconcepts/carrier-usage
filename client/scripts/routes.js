'use strict';

var React = require('react');
var routeActions = require('./actions/routes');
var WelcomePage = React.createFactory(require('./components/welcome.jsx'));
var HomePage = React.createFactory(require('./components/home.jsx'));

var render = function(Page) {
  React.render(new Page(), document.getElementById('page-body'));
};

var index = function() {
  render(WelcomePage);
};

var home = function() {
  render(HomePage);
};

var routes = {
  '/': index,
  '/home': home
};

module.exports = routes;
