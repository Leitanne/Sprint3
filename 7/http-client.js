var http__ = require('http');
var process___ = require('process');
var url_ = process.argv[2];
http__.get(url_, function (response) {
    response.setEncoding('utf-8');
    response.on('data', function (data) {
        console.log(data);
    });
});
