'use strict';

var React = require('react');
var Link = require('./link.jsx');

var SideBarComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
              <li className="sidebar-brand">
                  <a href="/">Yeogurt</a>
              </li>
              <Link url="/app/about">About</Link>
              <Link url="/app/docs">Documentation</Link>
          </ul>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = SideBarComponent;
