var extend = require('extend-shallow');

/**
 * Metalsmith Environmental Variables Plugin
 *
 * Register all environmental variables to Metalsmith's metadata.
 */
module.exports = function (opts) {
  // Execute the plugin.
  return function (files, metalsmith, done) {
    // Retrieve the metadata.
    var metadata = metalsmith.metadata();

    // Inject all environmental variables and options into the metadata.
    extend(metadata, process.env, opts || {});

    // Done... Seriously.
    done();
  };
};
