'use strict';

var React = require('react');
var Link = require('./modules/link.jsx');

var WelcomeComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <div className="yeogurt-info">
        <h1>Welcome to Yeogurt!</h1>
        <p>
          <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
        </p>
        <p>
          Choose a page below to learn more!
        </p>
        <Link url="/app/about">About</Link><br/>
        <Link url="/app/docs">Documentation</Link>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = WelcomeComponent;
