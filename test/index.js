var assertDir = require('assert-dir-equal');
var env = require('../.');
var jstransformer = require('metalsmith-jstransformer');
var Metalsmith = require('metalsmith');

function test(name, options) {
  /* globals it describe */
  it(name, function (done) {
    // Build the Metalsmith environment.
    new Metalsmith('test/fixtures/' + name)
      // Register the plugin.
      .use(env(options))
      // Use JSTransformers for content templating.
      .use(jstransformer())
      // Build the system.
      .build(function (err) {
        if (err) {
          return done(err);
        }
        assertDir('test/fixtures/' + name + '/expected', 'test/fixtures/' + name + '/build');
        return done();
      });
  });
}

describe('metalsmith-env', function () {
  test('basic');
  test('npm_config');
  test('options', require('./fixtures/options/options.json'));
});
