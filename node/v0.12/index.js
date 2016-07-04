#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"
'use strict';

var makePrefixedLogger = require('prefixed-log')

var logger = makePrefixedLogger('* [foo]')

logger('Hello %d', 33)
logger({foo: 'bar'})
