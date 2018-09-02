# dotnetcore-nodeservices-es6modules [![Build status](https://ci.appveyor.com/api/projects/status/tdyb3avy4epwnsag?svg=true)](https://ci.appveyor.com/project/tufantunc/dotnetcore-nodeservices-es6modules)
> Sample of creating UI elements from JavaScript ES6 modules to use in .netCore MVC with NodeServices

## About NodeServices
NodeServices provides a way for .netCore to run JavaScript files on backend with NodeJS. You can use NPM packages too.

## Problem
NodeJS uses CommonJS modules. You can import modules in your app with require() command like this:
```js
const mymodule = require('./mymodule');
```
But if you're using ES6 modules in your app, you should use import statement:
```js
import mymodule from './mymodule';
```
But NodeJS will not recognize it and throw an error. So NodeServices can't run that module.

## Solution
I use babel's transform method to convert ES6 modules to CommonJS modules.