# File Metadata Service

This service returns a JSON object containing the size of a file uploaded. A
file selection function is provided to select and upload a file to the
service. Note, the file is not stored in persistent storage by the service.

An instance of the service is available at

> https://filemetadata-jm.onrender.com

Using the service to select a file, the result of the upload is a JSON message,
status 200, with the format

    {
      "fileName": "example.txt",
      "size": 145324
    }

## Package Scripts

The following scripts are defined in this package

*Development Build and Run (use in separate terminals)*

```
npm run dev:build
```

```
npm run dev:start
```

*Production Build and Run*

Build

```
npm run build
```

```
npm run start
```

*Other commands*

Run ESLint against lib and test directories

```
npm run lint
```

Typecheck

```
npm run typecheck
```

Run unit and Postman tests

```
npm test
```

## License
MIT
