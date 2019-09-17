var port = 8081;
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var readFile = require('./read');
var add = require("./save");

// var path =required('path');


app.all('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.all('/enroll', function (req, res) {
   req.on('data', function (data) {
      add.save(data);
   })

});

app.get('/class/:subject', function (req, res) {
   console.log(req.params.subject);
   readFile.read(req.params.subject + ".csv", res)


})
   .listen(8080);

