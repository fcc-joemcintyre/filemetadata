/**
 * Copyright (c) Joe McIntyre, 2016
 * license: MIT (https://github.com/fcc-joemcintyre/filemetadata/LICENSE.txt)
 */
"use strict";
const multer = require ("multer");

// set up memory option for multer
let storeUpload = multer ({ storage: multer.memoryStorage ({}) }).single ("newfile");

/**
 * Return homepage with service usage instructions.
 */
function homepage (req, res) {
  let html =
    `<h1>File Metadata Service</h1>
     <p>This service returns a JSON object containing the size of a submitted
     file.<p>
     <p>The form below allows selection of a file. On selecting a file and pressing
     the <i>Upload file</i> button, the file will be uploaded and a JSON message
     returned.</p>
     <p>The JSON message will have the following format</p>
     <pre>  { "fileName":"example.txt", "size": 145324 }</pre>
     <p>Note: This implementation will only upload the file to memory, no
     permanent copy is stored.</p>
     <hr/>
     <p>Select a file and upload it.</p>
     <form id='upload' enctype='multipart/form-data' action='/api/file' method='post'>
       <input type='file' name='newfile'/>
       <input type='submit' value='Upload file' name='submit'/>
     </form>`;
  res.status (200).send (html);
}

/**
 * Upload a file to memory
 */
function upload (req, res) {
  storeUpload (req, res, function (err) {
    if (err) {
      res.status (500).send ("Error uploading file");
    } else {
      res.status (200).json ({
        fileName: req.file.originalname,
        size: req.file.size
      });
    }
  });
}

exports.homepage = homepage;
exports.upload = upload;
