/**
 * Copyright (c) Joe McIntyre, 2016
 * license: MIT (https://github.com/fcc-joemcintyre/filemetadata/LICENSE.txt)
 */
"use strict";

/**
 * Initialize routes.
 */
function init (app, listener) {
  app.get ("/", listener.homepage);
  app.post ("/api/file", listener.upload);
  app.use (listener.homepage);
}

exports.init = init;
