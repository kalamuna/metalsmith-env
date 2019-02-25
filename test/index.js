const assertDir = require('assert-dir-equal');
const jstransformer = require('metalsmith-jstransformer');
const Metalsmith = require('metalsmith');
const env = require('..');

function test(name, options) {
  /* globals it describe */
  it(name, done => {
    // Build the Metalsmith environment.
    new Metalsmith('test/fixtures/' + name)
      // Register the plugin.
      .use(env(options))
      // Use JSTransformers for content templating.
      .use(jstransformer())
      // Build the system.
      .build(err => {
        if (err) {
          return done(err);
        }

        assertDir('test/fixtures/' + name + '/expected', 'test/fixtures/' + name + '/build');
        return done();
      });
  });
}

describe('metalsmith-env', () => {
  test('basic');
  test('npm_config');
  test('options', require('./fixtures/options/options.json'));
});
