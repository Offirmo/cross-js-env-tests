#!/bin/sh
':'; //# http://sambal.org/?p=1014 ; exec `dirname $0`/node_modules/.bin/ts-node "$0" "$@"
"use strict";
//import makePrefixedLogger from 'prefixed-log'
var makePrefixedLogger = require('prefixed-log');
console.log(makePrefixedLogger);
var logger1 = makePrefixedLogger('* [foo]');
var logger2 = makePrefixedLogger(function () { return ("[" + Date.now() + "]"); }, {
    spacer: ' > ',
    spacerAlt: ' >'
});
var logger3 = makePrefixedLogger('!!!', console.error.bind(console), {
    isEnabled: false
});
logger1('Hello using version : "%s"', logger1.__src);
logger2('Hello again');
logger1({ foo: 'bar' });
logger2(['foo', 'bar']);
logger3('should not appear');
