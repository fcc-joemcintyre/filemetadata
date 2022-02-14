export const homepage =
  `<h1>File Metadata Service</h1>
    <p>This service returns a JSON object containing the size of a submitted
    file.<p>
    <p>The form below allows selection of a file. On selecting a file and pressing
    the <i>Upload file</i> button, the file will be uploaded and a JSON message
    returned.</p>
    <p>The JSON message will have the following format for on success</p>
    <pre>  { "fileName": "example.txt", "size": 145324 }</pre>
    <p>On failure, the JSON message format will be,</p>
    <pre>  { "error": "Error message text" }</pre>
    <p>Note: This implementation will not store the file data submitted.</p>
    <hr/>
    <p>Select a file (maximum file size of 1 megabyte) and submit it.</p>
    <form id='upload' enctype='multipart/form-data' action='/api/file' method='post'>
      <input type='file' name='newfile'/>
      <br />
      <br />
      <input type='submit' value='Submit file' name='submit'/>
    </form>
`;
