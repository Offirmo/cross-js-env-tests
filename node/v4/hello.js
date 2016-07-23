#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/babel-node "$0" "$@"

const hwe = require('hello-world-emo')

console.log(typeof hwe.hello)
hwe.hello()
hwe.hello('Offirmo')
hwe.goodbye('Offirmo')
