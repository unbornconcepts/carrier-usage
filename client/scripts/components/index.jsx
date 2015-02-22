'use strict';

var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');
var Page = require('./page.jsx');

var IndexComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <DefaultLayout>
        <Page context={this.props.context}/>
        <code className="version">v0.14.2</code>
      </DefaultLayout>
      /* jshint ignore:end */
    );
  }
});

module.exports = IndexComponent;
