var http__In = require('http');
var map = require('through2-map');
var process__In = require('process');
var server__ = http__In.createServer(function (req, res) {
    if (req.method == 'POST') {
        req.pipe(map(function (data) {
            return data.toString().toUpperCase();
        })).pipe(res);
    }
});
server__.listen(process__In.argv[2]);
