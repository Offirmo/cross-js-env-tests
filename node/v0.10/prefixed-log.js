#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"
'use strict';

var makePrefixedLogger = require('prefixed-log')

var logger = makePrefixedLogger('* [foo]')

logger('Hello using version : "%s"', logger.__src)
logger({foo: 'bar'})
