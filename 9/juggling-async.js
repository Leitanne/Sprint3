const http = require('http');
const process = require('process');

let message = "";
http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        message += data;
    });

    response.on('end', () => {
        console.log(message);
        message = "";
        http.get(process.argv[3], (response) => {
            response.setEncoding('utf-8');
            response.on('data', (data) => {
                message += data;
            });
                    
            response.on('end', () => {
                console.log(message);
                message = "";
                http.get(process.argv[4], (response) => {
                    response.setEncoding('utf-8');
                    response.on('data', (data) => {
                    message += data;
                    });
                                
                    response.on('end', () => {
                    console.log(message);
                    message = "";
                    });
                });
            });
        });
    });
});


