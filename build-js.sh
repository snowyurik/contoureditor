#!/bin/sh

# tsc -out src/main/resources/static/js/index.js src/main/ts/index.ts

tsc --allowJs --jsx react --outFile src/main/resources/static/js/index.js src/main/ts/index.tsx --module system --moduleResolution node --esModuleInterop
#tsc --p src/main/ts -out src/main/resources/static/js/index.js
