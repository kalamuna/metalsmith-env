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
    // Register all the variables from process.env.
    for (var i in process.env) {
      // Add the variable.
      // TODO: Do we need to clean anything?
      metadata[i] = process.env[i];
    }
    // Done... Seriously.
    done();
  };
};
