'use strict';
if (process.env.NODE_ENV !== "production" && require('fs').existsSync(require('path').join(__dirname, 'build/Debug/node-lmdb.node'))) {
	module.exports = require('./build/Debug/node-lmdb');
} else {
	module.exports = require('./build/Release/node-lmdb');
}
