var http = require('http');
var processInput_ = require('process');
var message_ = "";
http.get(processInput_.argv[2], function (response) {
    response.setEncoding('utf-8');
    response.on('data', function (data) {
        message_ += data;
    });
    response.on('end', function () {
        console.log(message_);
        message_ = "";
        http.get(processInput_.argv[3], function (response) {
            response.setEncoding('utf-8');
            response.on('data', function (data) {
                message_ += data;
            });
            response.on('end', function () {
                console.log(message_);
                message_ = "";
                http.get(processInput_.argv[4], function (response) {
                    response.setEncoding('utf-8');
                    response.on('data', function (data) {
                        message_ += data;
                    });
                    response.on('end', function () {
                        console.log(message_);
                        message_ = "";
                    });
                });
            });
        });
    });
});
