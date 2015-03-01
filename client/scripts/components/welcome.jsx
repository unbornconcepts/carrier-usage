'use strict';

var React = require('react');

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
          Choose a page from the navigatin bar!
        </p>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = WelcomeComponent;
