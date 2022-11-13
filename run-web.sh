#!/bin/bash

./web/build-js.sh && \
./web/build-css.sh && \
mvn -am -pl web spring-boot:run
