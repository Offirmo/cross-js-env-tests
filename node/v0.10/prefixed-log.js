#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"
'use strict';

var makePrefixedLogger = require('prefixed-log/dist/index.node-legacy')

var logger1 = makePrefixedLogger('* [foo]')
var logger2 = makePrefixedLogger(function () { return '[' + Date.now() + ']' }, {
	spacer: ' > ',
	spacerAlt: ' >'
})
var logger3 = makePrefixedLogger('!!!', console.error.bind(console), {
	isEnabled: false
})

logger1('Hello using version : "%s"', logger1.__src)
logger2('Hello again')
logger1({foo: 'bar'})
logger2([ 'foo', 'bar'])
logger3('should not appear')


