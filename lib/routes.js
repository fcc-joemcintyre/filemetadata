const listener = require ('./listener');

/**
 * Initialize routes.
 * @param {Object} app Express instance
 * @param {Object} listener Listener fumctions
 * @returns {void}
 */
function init (app) {
  app.post ('/api/file', listener.upload);
}

exports.init = init;
