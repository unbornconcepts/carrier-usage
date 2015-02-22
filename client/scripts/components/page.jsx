'use strict';

var React = require('react');
var pageStore = require('../stores/page');

var Page = React.createClass({
  mixins: [pageStore.mixin],
  getInitialState: function () {
    return pageStore.get();
  },
  render: function() {
    return (
      <div>{this.state.content}</div>
    );
  },
  _onChange: function () {
    this.setState(pageStore.get());
  }
});

module.exports = Page;
