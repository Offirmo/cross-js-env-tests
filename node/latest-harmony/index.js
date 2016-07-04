#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node --harmony_modules --harmony_regexp_property "$0" "$@"
'use strict';

const makePrefixedLogger = require('prefixed-log')

const logger = makePrefixedLogger('* [foo]')

logger('Hello using version : "%s"', logger.__src)
logger({foo: 'bar'})