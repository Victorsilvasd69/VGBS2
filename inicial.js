var http = require('http');
var dt = require('./modulos');

http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("The date and time are currenly: " + dt.dataHora());
    res.end();
}).listen(8080);
