# React template

## What is it?

A Feedhenry template that is using Browserify, Cordova and React. It can be used with the HelloWorld cloud app](https://github.com/feedhenry-templates/helloworld-cloud) or any cloud app. Refer to [fhconfig.json](www/fhconfig.json) for configuration.

# How to run it

## Local clone

* npm install. A grunt task is automatically run to regenerate main.js
* Edit fhconfig.json and put in all the relevant configuration
* Build an run locally with `cordova serve`
* Open a browser at `http://localhost:8001/browser/www`

## Running on iOS or Android

* npm install. A grunt task is automatically run to regenerate main.js
* cordova run [target] (this will launch an emulator for android or iOs)

## Development using Grunt

* npm install
* grunt serve