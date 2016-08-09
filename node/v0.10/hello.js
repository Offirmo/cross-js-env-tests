#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"

const hello = require('hello-world-emo/dist/index.node-legacy').hello
const goodbye = require('hello-world-emo/dist/index.node-legacy').goodbye

console.log(typeof hello, hello)
hello()
hello('Offirmo')
goodbye('Offirmo')
