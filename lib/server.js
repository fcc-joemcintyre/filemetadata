/**
 * Copyright (c) Joe McIntyre, 2016
 * license: MIT (https://github.com/fcc-joemcintyre/filemetadata/LICENSE.txt)
 */
"use strict";
const express = require ("express");
const routes = require ("./routes");
const listener = require ("./listener");

/**
 * Start the Timestamp server.
 */
function start (port) {
  console.log ("Starting File Metadata server");

  // initialize and start server
  let app = express ();
  routes.init (app, listener);
  app.listen (port);

  console.log ("File Metadata server listening on port " + port);
}

exports.start = start;
