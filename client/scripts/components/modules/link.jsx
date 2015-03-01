'use strict';

var React = require('react');
var Backbone = require('backbone');

// Link Component
// Handles pushState route changes within app
// Usage: <Link url="/linkUrl">Link Title</Link>
var LinkComponent = React.createClass({

  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <li><a onClick={this.handleClick} href={this.props.url} {...this.props}>{this.props.children}</a></li>
      /* jshint ignore:end */
    );
  },

  handleClick: function(e) {
    e.preventDefault();
    Backbone.history.navigate(this.props.url, { trigger: true });
  }

});

module.exports = LinkComponent;
