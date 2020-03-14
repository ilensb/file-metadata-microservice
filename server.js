'use strict'

var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var express = require('express')
var app = express()


app.listen(process.env.PORT, function () {
  console.log('Node.js listening on port ' + process.env.PORT)
})

app.get('/', function(req, res) {  
  res.sendFile(__dirname + '/views/index.html');
})

app.post("/api/fileanalyse", upload.any(), function (req, res) {
  var file = req.files[0]
  console.log(file)
  var result = {
    name: file.originalname,
    size: file.size
  }
  res.send(result)
})
