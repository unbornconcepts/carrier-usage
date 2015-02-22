'use strict';

var React = require('react');
var router = require('./router');
var page = require('./stores/page');

var Index = React.createFactory(require('./components/index.jsx'));
React.render(new Index(), document.getElementById('app-wrapper'));

router.init();

console.log('Welcome to Yeogurt');
