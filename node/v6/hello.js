#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/babel-node "$0" "$@"

const { hello, goodbye } = require('hello-world-emo')

console.log(typeof hello)
hello()
hello('Offirmo')
goodbye('Offirmo')
