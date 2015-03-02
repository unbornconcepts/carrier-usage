'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;
var sideBarActions = require('../actions/side-bar');

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
        <Button onClick={this.handleClick}>Toggle Menu</Button>
      </div>
      /* jshint ignore:end */
    );
  },

  handleClick: function() {
    sideBarActions.toggle();
  }
});

module.exports = WelcomeComponent;
