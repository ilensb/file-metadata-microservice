
# API Project: File Metadata Microservice

###    User stories:
1. I can submit a form that includes a file upload.
2. When I submit something, I will receive the file name and size in bytes within the JSON response

### Usage :
* Go to the main page, and upload a file using the provided form.

### Hint:
* To handle the file uploading you should use the [multer](https://www.npmjs.com/package/multer) npm package.

### Example query usage:
Upload file from the UI at the root.

`https://groovy-jasmine-0kalp5c5.glitch.me`

### Example query output:
`https://groovy-jasmine-0kalp5c5.glitch.me/upload`

```
{
"name": "2016-01-26.png",
"size": 258957,
} 
```