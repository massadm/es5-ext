'use strict';

module.exports = require('../../_is-extensible') ?
		Array.prototype.filter : require('./shim');
