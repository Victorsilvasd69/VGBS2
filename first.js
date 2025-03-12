//Ativando servidor web
var http = require('http'); //inclua os modulos que serão ultilizados aqui
http.createServer(function (req, res) { //Acessando o modulo HTTP e criando o servidor.
    res.writeHead(200, {'Content-Type': 'Text/plain'});
    res.end('Hello World!');
}).listen(3000);