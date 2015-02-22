'use strict';

var React = require('react');
var router = require('../../router');


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
      <a onClick={this.handleClick} href={this.props.url} {...this.props}>{this.props.children}</a>
      /* jshint ignore:end */
    );
  },

  handleClick: function(e) {
    e.preventDefault();
    router.setRoute(this.props.url);
  }

});

module.exports = LinkComponent;
