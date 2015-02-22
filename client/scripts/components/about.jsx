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
        <p>
          A <b>Choose your own adventure</b> generator for creating static sites and single page applications.
          Helps you harness the power of your favorite tools: Angular, React + Flux, Backbone, Jade, Swig,
          Express, Grunt and much more!
        </p>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = HomeComponent;
