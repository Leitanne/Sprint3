const http = require('http');
const processInput_ = require('process');

let message_:string = "";
http.get(processInput_.argv[2], (response: any) => {
    response.setEncoding('utf-8');
    response.on('data', (data: string) => {
        message_ += data;
    });

    response.on('end', () => {
        console.log(message_);
        message_ = "";
        http.get(processInput_.argv[3], (response: any) => {
            response.setEncoding('utf-8');
            response.on('data', (data: string) => {
                message_ += data;
            });
                    
            response.on('end', () => {
                console.log(message_);
                message_ = "";
                http.get(processInput_.argv[4], (response: any) => {
                    response.setEncoding('utf-8');
                    response.on('data', (data: string) => {
                    message_ += data;
                    });
                                
                    response.on('end', () => {
                    console.log(message_);
                    message_ = "";
                    });
                });
            });
        });
    });
});


