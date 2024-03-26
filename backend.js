var http = require('http');
var fs = require('fs')


// modules
var dt = require('./modules/dateTime')

//functions

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(400)
      res.write("Error")
    } else {
      res.write(data)
    }
    res.end()
  })
}).listen(8080);