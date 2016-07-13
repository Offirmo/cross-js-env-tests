#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/node_modules/.bin/ts-node "$0" "$@"

//import makePrefixedLogger from 'prefixed-log'
import * as makePrefixedLogger from 'prefixed-log'

console.log(makePrefixedLogger)

const logger1 = makePrefixedLogger('* [foo]')
const logger2 = makePrefixedLogger(() => `[${Date.now()}]`, {
	spacer: ' > ',
	spacerAlt: ' >'
})
const logger3 = makePrefixedLogger('!!!', console.error.bind(console), {
	isEnabled: false
})

logger1('Hello using version : "%s"', logger1.__src)
logger2('Hello again')
logger1({foo: 'bar'})
logger2([ 'foo', 'bar'])
logger3('should not appear')
