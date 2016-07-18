#! /bin/bash
trap 'echo "! ERROR $?" && echo "" && echo "" && exit' ERR
echo
echo

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

echo "* cwd = `pwd`"

TARGET=$1
[ -z "$TARGET" ] && TARGET="hello"
TARGET=$TARGET.js
echo "* target is $TARGET..."

echo "* launching nvm run $(cat .nvmrc) $TARGET..."
echo "~~~~~~~~~~~~~~~~~~~~~"
nvm run $(cat .nvmrc) $TARGET
echo "~~~~~~~~~~~~~~~~~~~~~"
echo "good bye"
echo
echo
