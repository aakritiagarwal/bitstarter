var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var msg = fs.readFile('index.html');
  response.send(msg.toString("utf-8", 0, 27);
  //response.send('Hello World 2!');
  console.log(msg.toString("utf-8", 0, 27);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

