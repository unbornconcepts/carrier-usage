'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');
var SideBar = require('../modules/side-bar.jsx');
var Link = require('../modules/link.jsx');

var DefaultComponent = React.createClass({
  componentDidMount: function() {
    pageStore.on('change:title change:sideBarVisible',this._onChange);
  },

  componentWillUnmount: function() {
    pageStore.off('change:title change:sideBarVisible', this._onChange);
  },

  getInitialState: function() {
    return pageStore.toJSON();
  },

  render: function() {
    var classes = this.state.sideBarVisible ? 'toggled' : '';
    return (
      /* jshint ignore:start */
      <div id="wrapper" className={classes}>
        <SideBar>
          <Link url="/app/about">About</Link>
          <Link url="/app/docs">Documentation</Link>
        </SideBar>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
        <code className="version">v0.14.2</code>
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
