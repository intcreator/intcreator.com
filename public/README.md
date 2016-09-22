# intcreator.com

A Polymer site to demonstrate Brandon's web dev skills

## Run this site locally

You can run this site on your own machine by following the following instructions.

## Clone this repository

Clone this repository on your own machine by running this command in the directory of your choosing:

```
$ git clone https://github.com/intcreator/intcreator.com
```

## Install the Polymer-CLI

Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed.

## Viewing Your Application

Run `polymer serve` to serve this site locally.

```
$ polymer serve
```

The default port is `8080`, so visit `http://localhost:8080/`.

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

The application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run the application's test suite locally.  I'm not sure if it exists yet but if it does exist this is how to use it.
