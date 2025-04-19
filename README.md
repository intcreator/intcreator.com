![Build status](https://travis-ci.org/intcreator/intcreator.com.svg?branch=master)

# [intcreator.com](https://intcreator.com/)

This website was originally created in HTML, CSS, and JavaScript using the Polymer Elements library, but now it uses Lit with TypeScript and Rollup. As of 4/2025 all published components have been migrated. It is deployed with Firebase.

## Run this website locally

Note: this guide assumes you have Node and NPM installed.  If you need to, download Firebase tools:

```
npm i -g firebase-tools
```

1. Clone the repo:
```
git clone https://github.com/intcreator/intcreator.com
```
1. Go inside the public folder:
```
cd intcreator.com/public
```
1. Install dependencies:
```
npm install
```
1. Build the output:
```
npm run build
```
1. Go up a folder:
```
cd ..
```
1. Run the Firebase server locally:
```
firebase serve
```

Note: You must use the Firebase server for redirects to work correctly (important for the client side routing to work).

## Contributing

Please open an issue or pull request if you discover any problems with this site, including poor UX design, broken functionality, or security flaws.  Thanks!
