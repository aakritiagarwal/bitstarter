var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var buffer = new Buffer(28);
  var fs = require('fs');
  var buffer  = fs.readFileSync('index.html');
  response.send(buffer.toString("utf-8"));
  //response.send('Hello World 2!');
//  console.log(buffer.toString("utf-8");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

