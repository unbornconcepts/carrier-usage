'use strict';

var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');

var IndexComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <DefaultLayout>
        <div id="page-body"></div>
        <code className="version">v0.14.2</code>
      </DefaultLayout>
      /* jshint ignore:end */
    );
  }
});

module.exports = IndexComponent;
