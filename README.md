# Pet Shop front-end apps with React JS

[![Build Status](https://travis-ci.org/perscrew/pet-shop-reactjs.svg?branch=master)](https://travis-ci.org/perscrew/pet-shop-reactjs)

These app is a simple CRUD interface for a Pet Shop.
It demonstrates the use of ReactJS & ES6.
The app calls a back-end api hosted on another [Github project : pet-rest-api](https://github.com/perscrew/pet-rest-api).

**Important** : You need to run the back-end api before launching the app.

## 1. Installation

* Clone the github repository :
```
git clone https://github.com/perscrew/pet-shop-reactjs.git
```

* Launch npm install to retrieve dependencies
```
npm install
```

## 2. Set up the server back-end URL
You can set-up the default back-end server URL in the [/src/api/config.js](/src/api/config.js) file.
Just replace the SERVER_BASE_URL constant with the desired value :
```
//Configure here the server api base url
const SERVER_BASE_URL = "http://localhost:8080";
```

## 3. Launch the app

* Run npm start to launch webpack dev-server
```
npm start
```
By default, the server is running on the port 3000. You can modify these configuration in [package.json](package.json) & [webpack.config.js](webpack.config.js) files. Find "3000" and replace it with the desired port.
Once npm start has finished, you can check the app on your browser [http://localhost:3000](http://localhost:3000)

## 4. Use the app

When you launch the app you arrive on the welcome page. You can consult the pet list of your shop.

![Welcome page](/screenshots/welcome.png)

You can add a pet by clicking on the menu header link "add pet".

![Add pet](/screenshots/add_pet.png)

You can edit a pet by clicking on the HomePage edit list button.

![Edit pet](/screenshots/edit_pet.PNG)

You can also delete a pet by clicking on the Homepage delete button.

![Delete pet](/screenshots/delete_pet.png)

## 5. Run test units
To run the test units simply run npm test
```
npm test
```
The test units are organized in 3 sections :
- components (react component)
- reducers (redux reducer)
- saga (redux-saga)

## 6. Build the app for production environment

To build the app for production environment run npm run build-prod.
```
npm run build-prod
```

## 7. Appendices

## Potential enhancements
- Add a login to secure the app, using OAUTH or JWT Token.
- Use Request Headers for each fetch call on pet api to improve security : use OAUTH or JWT Token.
- Use environment variable to configure the server api URL & PORT.
- Use environment variable to configure the webpack-dev-server PORT.


###Third party libraries used

You will find below the different third party libraries used in the project.

|Feature|Packages|Benefits|
|-------|--------|--------|
|React|[`react`](https://github.com/facebook/react)|A declarative, efficient, and flexible JavaScript library for building user interfaces|
||[`react-dom`](https://www.npmjs.com/package/react-dom)|Serves as the entry point of the DOM-related rendering paths|
||[`react-hot-loader`](https://github.com/gaearon/react-hot-loader)|Tweak React components in real time when developing|
|Redux|[`redux`](https://github.com/reactjs/redux)|A predictable state container for JavaScript apps|
||[`react-redux`](https://github.com/reactjs/react-redux)|React bindings for Redux|
||[`redux-freeze`](https://github.com/buunguyen/redux-freeze)|Redux middleware that prevents state from being mutated anywhere in the app|
|Router|[`react-router`](https://github.com/ReactTraining/react-router)|Declarative routing for React. Your app has pages now|
||[`react-router-redux`](https://github.com/reactjs/react-router-redux)|Simple bindings to keep react-router and redux in sync|
|Bootstrap|[`react-bootstrap`](https://github.com/react-bootstrap/react-bootstrap)|Bootstrap 3 components built with React|
||[`react-router-bootstrap`](https://github.com/react-bootstrap/react-router-bootstrap)|Integration between React Router and React-Bootstrap|
|Forms|[`redux-form`](https://github.com/erikras/redux-form)|A Higher Order Component using react-redux to keep form state in a Redux store|
|Asynchronous|[`redux-saga`](https://github.com/yelouafi/redux-saga)|Asynchronous API calls made easy with Saga|
|Unit tests|[`mocha`](https://github.com/mochajs/mocha)|Simple javascript test framework|
||[`enzyme`](https://github.com/airbnb/enzyme)|JavaScript Testing utilities for React components|
||[`react-addons-test-utils`](https://facebook.github.io/react/docs/test-utils.html)|Required by enzyme. Makes it easy to test React components|
||[`ignore-styles`](https://www.npmjs.com/package/ignore-styles)|Ignore imported style files when running in Node|
|Sass|[`node-sass`](https://github.com/sass/node-sass)|Mature, stable, and powerful CSS extension language|
|Webpack|[`webpack`](https://github.com/webpack/webpack)|A bundler for javascript, css and others|
||[`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)|Serves the app at [http://localhost:8080/](http://localhost:8080/)|
||[`extract-text-webpack-plugin`](https://github.com/webpack/extract-text-webpack-plugin)|Webpack plugin that builds the css bundle file|
||[`style-loader`](https://github.com/webpack/style-loader)|Webpack module that loads styles|
||[`css-loader`](https://github.com/webpack/css-loader)|Webpack module that loads css styles|
||[`sass-loader`](https://github.com/jtangelder/sass-loader)|Webpack module that loads sass styles|
||[`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)|Webpack module to remove previous build files|
|Babel|[`babel-core`](https://github.com/babel/babel/tree/master/packages/babel-core)|Compiler that helps node.js and the browser to understand the new js syntax|
||[`babel-runtime`](https://www.npmjs.com/package/babel-runtime)|Helps node.js to understand the new js syntax|
||[`babel-preset-es2015`](http://babeljs.io/docs/plugins/preset-es2015/)|Helps node.js to use [ES2015 Javascript syntax](http://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf)|
||[`babel-preset-react`](http://babeljs.io/docs/plugins/preset-react/)|Helps node.js to use React's [JSX syntax](https://facebook.github.io/jsx/)|
||[`babel-preset-stage-3`](https://babeljs.io/docs/plugins/preset-stage-0/)|Helps node.js to use the spread operator|
||[`babel-loader`](https://github.com/babel/babel-loader)|Helps webpack to compile the new javascript syntax|
||[`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/)|Helps the browser to understand the new js syntax|
||[`whatwg-fetch`](https://github.com/github/fetch)|Helps the browser to use fetch|
|Sinon|[`sinon`](https://github.com/sinonjs/sinon)|Standalone and test framework agnostic JavaScript test spies, stubs and mocks.|
