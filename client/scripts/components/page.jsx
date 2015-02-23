'use strict';

var React = require('react');
var pageStore = require('../stores/page');

var Page = React.createClass({
  componentDidMount: function() {
    pageStore.on('change:content',this._onChange);
  },

  componentWillUnmount: function() {
    pageStore.off('change:content', this._onChange);
  },

  getInitialState: function () {
    return pageStore.toJSON();
  },

  render: function() {
    return (
      <div>{this.state.content}</div>
    );
  },

  _onChange: function () {
    this.setState(pageStore.toJSON());
  }
});

module.exports = Page;
