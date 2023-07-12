var http_In = require('http');
var process_In = require('process');
var fs_In = require('fs');
var server_ = http_In.createServer(function (req, res) {
    var stream = fs_In.createReadStream(process.argv[3]);
    stream.pipe(res);
});
server_.listen(process_In.argv[2]);
