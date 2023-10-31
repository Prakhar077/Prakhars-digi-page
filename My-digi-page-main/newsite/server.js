/*var http = require('http'); // Importing the http package
var fs = require('fs');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', (err, data) => {
    res.end(data.toString());
  })
}).listen(process.env.PORT || 5000);*/

var http = require('http'); // Importing the http package
var fs = require('fs');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      res.end(data.toString());
    })
  }
  else if(req.url === '/about') {
   // res.end("<h1>About Me</h1>");
   fs.readFile('about.html',(err,date)=> {
     res.end(data.toString());
    })
  } else {
    res.end("<h1>Error 404 Page not Found</h1>")
  }
}).listen(process.env.PORT || 4000);
/*let meow=4;
export default meow;*/