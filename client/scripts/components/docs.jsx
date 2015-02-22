'use strict';

var React = require('react');
var Link = require('./modules/link.jsx');

var DocComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <div className="yeogurt-info">
        <h1>Yeogurt Documentation</h1>
        <p>
          Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator">documentation</a> and start mixing up something awesome.
        </p>
        <p>
          <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
        </p>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = DocComponent;
