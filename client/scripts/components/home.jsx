'use strict';

var React = require('react');

var HomeComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <div className="yeogurt-info">
        <h1>About Yeogurt!</h1>
        <p>
          <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
        </p>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = HomeComponent;
