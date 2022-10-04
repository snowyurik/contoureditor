#!/bin/sh

# tsc -out src/main/resources/static/js/index.js src/main/ts/index.ts

tsc --allowJs --jsx react src/main/ts/index.tsx --module es6 --moduleResolution node --esModuleInterop \
&& rollup -c src/main/ts/rollup.config.js src/main/ts/index.js --file src/main/resources/static/js/index.js
#--outFile src/main/resources/static/js/index.js
#--esModuleInterop
#tsc --p src/main/ts -out src/main/resources/static/js/index.js
