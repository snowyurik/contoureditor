#!/bin/sh

callPath=`pwd`
scriptPath=`dirname $0`

lessc --verbose $scriptPath/src/main/less/index.less $scriptPath/src/main/resources/static/css/index.css
