'use strict';

const handlers = require('..');
const assert = require('assert').strict;

assert.strictEqual(handlers(), 'Hello from handlers');
console.info('handlers tests passed');
