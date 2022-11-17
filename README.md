# Contour Editor
Browser contour editor, created with ReactJS and Java Spring Boot.
 
## Functionality
Create/Display/Edit/Delete closed contours.

## Dependensies
 - ReactJS
 - React-Konva 
 `` npm install react-konva konva --save ``
 
## Set up database connection with environment variables
```
export CONTOUREDITOR_DATASOURCE_URL="jdbc:mysql://localhost:3306/contoureditor"
export CONTOUREDITOR_DATASOURCE_USERNAME="contoureditor"
export CONTOUREDITOR_DATASOURCE_USERNAME="contoureditor"
```
 
## Tests
### Database
```
mvn -am -pl datalib test
```
### Web
```
mvn -am -pl web test
```

## Create user with command line tool first
### Build cli
```
mvn clean install
mvn -am -pl cli package
```
### Create user
```
cd cli
./run-app.sh create username password
```

### Run web
```
./run-web.sh
```
this will build and aggregate js code from typescript code and then start spring app



