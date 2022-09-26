#!/bin/sh

./build-css.sh

mvn spring-boot:run -Dspring-boot.run.arguments="--addon.base-url=http://localhost:8080"
