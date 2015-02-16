/**
 * Database Configuration
 */

'use strict';
var mongoose = require('mongoose');
var settings = require('./env/default');
var fs = require('fs');
var path = require('path');
var db = {};

// Add coloring for console output
require('colors');

var databaseConfig = function(app) {

  // Get current server environment
  var env = app.get('env');

  // Connect to database
  mongoose.connect(settings.database.url, settings.database.options);

  if ('development' === env) {
    // Log database actions
    mongoose.set('debug', true);
  }

  return db;
};

module.exports = databaseConfig;
