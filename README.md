# Metalsmith Enviromental Variables Plugin [![npm version](https://badge.fury.io/js/metalsmith-env.svg)](https://badge.fury.io/js/metalsmith-env)

[![Build Status](https://travis-ci.org/kalamuna/metalsmith-env.svg?branch=master)](https://travis-ci.org/kalamuna/metalsmith-env)
[![Dependency Status](https://david-dm.org/kalamuna/metalsmith-env.png)](https://david-dm.org/kalamuna/metalsmith-env)
[![Greenkeeper badge](https://badges.greenkeeper.io/kalamuna/metalsmith-env.svg)](https://greenkeeper.io/)

[Metalsmith](http://metalsmith.io) plugin to register all [environmental variables](https://nodejs.org/api/process.html#process_process_env) as metadata.

## Installation

    npm install --save metalsmith-env

### CLI

If you are using the command-line version of Metalsmith, you can install via npm, and then add the `metalsmith-env` key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-env": {}
  }
}
```

### JavaScript

If you are using the JS Api for Metalsmith, then you can require the module and add it to your `.use()` directives:

```js
var env = require('metalsmith-env');

metalsmith.use(env());
```

## Usage

Once installed, all environment variables, from [`process.env`](https://nodejs.org/api/process.html#process_process_env), become available as [Metalsmith metadata](https://github.com/segmentio/metalsmith#metadata-api).

### Options

#### `opts.variables`

An array of default variables that will be available. Environmental variables will then override the default set.

#### `opts.overrides`

An array of variables that will completely override the given set of environmental variables.

#### `opts.env`

The assumed environmental variables, defaults to `process.env`.

#### `opts.metadatakey`

Store the environmental variables under a `metadata[metadatakey]` instead of merging into `metadata`.

## Example

The following example uses [Jade](http://jade-lang.com) and [Metalsmith JSTransformer](https://github.com/RobLoach/metalsmith-jstransformer):

### `index.pug`
``` pug
---
title: Environmental Variables
---
doctype html
html(lang="en")
  head
    title= title
  body
    h1= title
    p This is the environmental variable "NODE_ENV":
    code
      pre= NODE_ENV
```

### Build

```
$ NODE_ENV=production node_modules/.bin/metalsmith
```

### Result

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Environmental Variables</title>
  </head>
  <body>
    <h1>Environmental Variables</h1>
    <p>This is the environmental variable "NODE_ENV":</p>
    <code><pre>production</pre></code>
  </body>
</html>
```

## License

MIT
