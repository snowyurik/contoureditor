#!/bin/sh

# tsc -out src/main/resources/static/js/index.js src/main/ts/index.ts

tsc --allowJs --jsx react -out src/main/resources/static/js/index.js src/main/ts/index.tsx
