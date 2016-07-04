#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/node_modules/.bin/ts-node "$0" "$@"

import makePrefixedLogger = require('prefixed-log')

const logger = (makePrefixedLogger as any as Function)('* [foo]')

logger('Hello using version : "%s"', (logger as any).__src)
logger({foo: 'bar'})
