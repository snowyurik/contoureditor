#!/bin/sh

callPath=`pwd`
scriptPath=`dirname $0`

# tsc -out src/main/resources/static/js/index.js src/main/ts/index.ts

tsc --allowJs --jsx react $scriptPath/src/main/ts/index.tsx --module es6 --moduleResolution node --esModuleInterop \
&& rollup -c $scriptPath/src/main/ts/rollup.config.js $scriptPath/src/main/ts/index.js --file $scriptPath/src/main/resources/static/js/index.js
#--outFile src/main/resources/static/js/index.js
#--esModuleInterop
#tsc --p src/main/ts -out src/main/resources/static/js/index.js

