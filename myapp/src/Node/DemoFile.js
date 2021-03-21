var http = require('http');
var fs = require('fs');
console.log("heelo")
http.createServer(function (req, res) 
  fs.readFile('File1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
