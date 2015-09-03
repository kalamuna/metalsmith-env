var extend = require('extend-shallow');

/**
 * Metalsmith Environmental Variables Plugin
 *
 * Register all environmental variables to Metalsmith's metadata.
 */
module.exports = function (opts) {
  // Prepare the options.
  opts = opts || {};

  // Execute the plugin.
  return function (files, metalsmith, done) {
    // Retrieve the metadata.
    var metadata = metalsmith.metadata();

    // Inject all environmental variables into the metadata.
    extend(metadata, process.env);

    // Done... Seriously.
    done();
  };
};
