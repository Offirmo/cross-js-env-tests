#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"

var hwe = require('hello-world-emo/dist/index.node-legacy')

console.log(typeof hwe.hello)
hwe.hello()
hwe.hello('Offirmo')
hwe.goodbye('Offirmo')
