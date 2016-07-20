#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"

var hello = require('hello-world-emo/dist/index.node-legacy')

console.log(typeof hello, hello)
hello()
hello('Offirmo')
