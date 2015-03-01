'use strict';

var React = require('react');
var pageStore = require('../../stores/page');
var SideBar = require('../modules/side-bar.jsx');

var DefaultComponent = React.createClass({
  componentDidMount: function() {
    pageStore.on('change:title',this._onChange);
  },

  componentWillUnmount: function() {
    pageStore.off('change:title', this._onChange);
  },

  getInitialState: function() {
    return pageStore.toJSON();
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <div id="wrapper">
        <SideBar></SideBar>
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                  {this.props.children}
                </div>
            </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },

  componentDidUpdate: function(prevProps, prevState) {
    var newState = this.state;
    if (newState.title !== prevState.title) {
      document.title = newState.title;
    }
  },

  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(pageStore.toJSON());
  }
});

module.exports = DefaultComponent;
