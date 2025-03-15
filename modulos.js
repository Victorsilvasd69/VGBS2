// Criando seus próprios modulos
exports.dataHora = (function () { return Date ();}());
console.log( this.dataHora);
var http = require('http');
var data = this.dataHora;
http.createServer(function (req, res) {
    res.writehead (200, {'content-type': 'text/plain'});
    res.end(data);
}).listen(3001);