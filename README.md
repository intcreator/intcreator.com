![Build status](https://travis-ci.org/intcreator/intcreator.com.svg?branch=master)

# [intcreator.com](https://intcreator.com/)

This website is created in HTML, CSS, and ES6 using the Polymer Elements library.  It is deployed with Firebase.  

## Run this website locally

Note: this guide assumes you have Node and NPM installed.  If you need to, download the Polymer CLI:

```
npm i -g polymer-cli
```

and Firebase tools:

```
npm i -g firebase-tools
```

1. Clone the repo:
```
git clone https://github.com/intcreator/intcreator.com
```
2. Go inside the public folder:
```
cd intcreator.com/public
```
3. Install dependencies:
```
npm install
```
4. Go up a couple folders:
```
cd ../../
```
5. Run the Firebase server locally:
```
firebase serve
```

Note: You must use the Firebase server for redirects to work correctly (important for the client side routing to work).

## Contributing

Please open an issue or pull request if you discover any problems with this site, including poor UX design, broken functionality, or security flaws.  Thanks!

[![Twitter Follow](https://img.shields.io/twitter/follow/intcreator.svg?style=social&label=Twitter&style=flat)](https://twitter.com/intcreator)