var http = require('http');

// modules
var dt = require('./modules/dateTime')

//functions

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write();
  res.end();
}).listen(8080);