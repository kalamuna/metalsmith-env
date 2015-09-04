# Metalsmith Enviromental Variables Plugin [![NPM version](https://img.shields.io/npm/v/metalsmith-env.svg)](https://www.npmjs.org/package/metalsmith-env)

[![Build Status](https://img.shields.io/travis/kalamuna/metalsmith-env/master.svg)](https://travis-ci.org/kalamuna/metalsmith-env)
[![Dependency Status](https://david-dm.org/kalamuna/metalsmith-env.png)](https://david-dm.org/kalamuna/metalsmith-env)

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

### Example

The following example uses [Jade](http://jade-lang.com) and [Metalsmith JSTransformer](https://github.com/RobLoach/metalsmith-jstransformer):

#### `index.jade`
``` jade
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

#### Build

```
$ NODE_ENV=production node_modules/.bin/metalsmith
```

#### Result

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
