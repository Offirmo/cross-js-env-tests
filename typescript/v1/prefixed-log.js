#!/bin/sh
':'; //# http://sambal.org/?p=1014 ; exec `dirname $0`/node_modules/.bin/ts-node "$0" "$@"
"use strict";
var prefixed_log_1 = require('prefixed-log');
var logger = prefixed_log_1["default"]('* [foo]');
logger('Hello using version : "%s"', logger.__src);
logger({ foo: 'bar' });
