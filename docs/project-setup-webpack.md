# Angular2 webpack
Guide from Official [angular.io](https://angular.io/docs/ts/latest/guide/webpack.html)

# Angular2 Dependencies
- @angular/common
- @angular/compiler
- @angular/core
- @angular/forms
- @angular/http
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/router
- core-js
- reflect-metadata
- rxjs
- zone.js

### angular2 required
```bash
npm install --save core-js reflect-metadata zone.js 
```
### angular2
```bash
npm install --save @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router
```

# Development Dependencies
### remove file & folder
```bash
npm install --save-dev rimraf
```
### jasmine for unit test
```bash
npm install --save-dev jasmine-core
```
### karma test runner
```bash
npm install --save-dev karma
```
### karma plugins
```bash
npm install --save-dev karma-jasmine phantomjs-prebuilt karma-phantomjs-launcher karma-sourcemap-loader karma-webpack
```
### webpack
```bash
npm install --save-dev webpack webpack-dev-server webpack-merge
```
### webpack loader
```bash
npm install --save-dev angular2-template-loader style-loader ts-loader css-loader file-loader html-loader null-loader raw-loader
```
### webpack plugins
```bash
npm install --save-dev extract-text-webpack-plugin html-webpack-plugin
```
### typescript & typings
```bash
npm install --save-dev typescript typings
```

# Typings For Typescript
### CMD windows
```bash
node_modules\\.bin\\typings install --save --global dt~core-js dt~jasmine dt~node
```
### Bash Terminal
```bash
./node_modules/.bin/typings install --save --global dt~core-js dt~jasmine dt~node
```