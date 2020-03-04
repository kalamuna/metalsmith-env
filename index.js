const extend = require('extend-shallow');

/**
 * Metalsmith Environmental Variables Plugin
 *
 * Register all environmental variables to Metalsmith's metadata.
 *
 * @param {Object} opts Options for the array. Includes `env` propertly, which will default to `process.env` if not provided.
 *
 * @returns {function} A function to initiate the Metalsmith env plugin.
 */
module.exports = function (opts) {
  const options = opts || {};
  const variables = options.variables || {};
  const overrides = options.overrides || {};

  // Execute the plugin.
  return function (files, metalsmith, done) {
    // Retrieve the environmental variables.
    const env = options.env || process.env;

    // Retrieve the metadata.
    const metadata = metalsmith.metadata();

    // Inject all environmental variables and options into the metadata.
    extend(metadata, variables, env, overrides);
    done();
  };
};
