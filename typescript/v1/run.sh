#! /bin/bash
trap 'echo "! ERROR $?" && echo "" && echo "" && exit' ERR
echo
echo

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
echo "* `nvm use`"

echo "* cwd = `pwd`"
NODE_MODULES_PATH=`dirname $0`/node_modules
EXEC_PATH=$NODE_MODULES_PATH/.bin/ts-node
echo "* will use $EXEC_PATH..."

TARGET=$1
[ -z "$TARGET" ] && TARGET="hello"
TARGET=$TARGET.ts
echo "* target is $TARGET..."

echo "* launching $EXEC_PATH $TARGET..."
echo "~~~~~~~~~~~~~~~~~~~~~"
$EXEC_PATH $TARGET
echo "~~~~~~~~~~~~~~~~~~~~~"
echo "good bye"
echo
echo
