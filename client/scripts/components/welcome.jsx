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
          Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator">documentation</a> and start mixing up something awesome.
        </p>
        <p>
          <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
        </p>
        <Link url="/home">Home</Link>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = WelcomeComponent;
