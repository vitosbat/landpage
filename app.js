	var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var buff = new Buffer(fs.readFileSync('index.html', 'utf-8'));
  response.send(buff.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
