import { upload } from './listener.js';

/**
 @typedef {import ('express').Express} Express
 */

/**
 * Initialize routes.
 * @param {Express} app Express instance
 * @returns {void}
 */
export function init (app) {
  app.post ('/api/file', upload);
}
