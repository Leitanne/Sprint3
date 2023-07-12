var httpInput_ = require('http');
var url__ = require('url');
var processInput___ = require('process');
var server___ = httpInput_.createServer(function (req, res) {
    var parsedURL = new URL(req.url, 'http://example.com');
    var date = new Date(String(parsedURL.searchParams.get('iso')));
    var time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    if (/^\/api\/parsetime/.test(req.url)) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(time));
    }
    else if (/^\/api\/unixtime/.test(req.url)) {
        res.end("{\"unixtime\":" + date.getTime().toString() + "}");
    }
});
server___.listen(process.argv[2]);
