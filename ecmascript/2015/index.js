#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/babel-node "$0" "$@"

import makePrefixedLogger from 'prefixed-log'

const logger = makePrefixedLogger('* [foo]')

logger('Hello using version : "%s"', logger.__src)
logger({foo: 'bar'})
