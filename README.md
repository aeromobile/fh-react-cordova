# React template

## What is it?

A Feedhenry template that is using Browserify, Cordova and React. It can be used with the HelloWorld cloud app](https://github.com/feedhenry-templates/helloworld-cloud) or any cloud app. Refer to [fhconfig.json](www/fhconfig.json) for configuration.

This template is configured to work with the node modules system and lets you use `require` in your components. If you want to use native ES6 imports you need have to install the `babelify` package.

# How to run it

## Development using Grunt

This is the best option for local development. It will watch your files for changes and auto-reload your browser.

* Clone you app to a local folder
* run `npm install`. This will also re-create the main.js files which bundles all other JavaScript files.
* run `grunt serve`

## Using the cordova tools

This is good for testing it with Cordova while still beeing able to view it in your browser.

* Clone your app and run `npm install`
* Build an run locally with `cordova serve`
* Open a browser at `http://localhost:8001/browser/www`

## Running on iOS or Android

Cordova also lets you install your app directly to an emulator. If you don't speficy one it will pick one that is available (usually iOS on a Mac).

* npm install. A grunt task is automatically run to regenerate main.js
* cordova run [target] (this will launch an emulator for android or iOs)
