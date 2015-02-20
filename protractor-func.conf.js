/**
 * Functional tests Protractor config.
 */

var baseConf = require('./protractor-base.conf.js').config,
    extend = require('extend');

exports.config = extend(baseConf);
