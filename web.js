var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var outPut = fs.readFileSync("index.html",encoding=String);
  response.send(outPut);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
