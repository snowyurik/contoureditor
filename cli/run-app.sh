#!/bin/bash

classPath=`cat target/classpath.properties`
classPathValue=${classPath#*=}

java -classpath $classPathValue:target/cli-1.0-SNAPSHOT.jar org.vihv.contoureditor.SpringBootConsoleApplication $@
