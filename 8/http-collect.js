var httpInput = require('http');
var processInput = require('process');
var url = processInput.argv[2];
var message = "";
var counter = 0;
var request = httpInput.request(url, function (response) {
    response.setEncoding('utf-8');
    response.on('data', function (data) {
        message += data;
        counter += data.length;
    });
    response.on('end', function () {
        console.log(counter);
        console.log(message);
    });
});
request.end();
