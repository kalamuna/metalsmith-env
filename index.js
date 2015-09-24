var extend = require('extend-shallow');

/**
 * Metalsmith Environmental Variables Plugin
 *
 * Register all environmental variables to Metalsmith's metadata.
 */
module.exports = function (opts) {
  var options = opts || {};
  var variables = options.variables || {};
  var overrides = options.overrides || {};

  // Execute the plugin.
  return function (files, metalsmith, done) {
    // Retrieve the environmental variables.
    var env = options.env || process.env;

    // Retrieve the metadata.
    var metadata = metalsmith.metadata();

    // Inject all environmental variables and options into the metadata.
    extend(metadata, variables, env, overrides);
    done();
  };
};
