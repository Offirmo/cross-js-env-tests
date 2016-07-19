#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/node_modules/.bin/ts-node "$0" "$@"


import hello = require('hello-world-emo')
//import hello from 'hello-world-emo'
//import {default as hello} from 'hello-world-emo'
//import * as hello from 'hello-world-emo'

console.log(typeof hello)
hello()
hello('Offirmo')
