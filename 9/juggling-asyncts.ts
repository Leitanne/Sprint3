const http = require('http');
const processInput_ = require('process');

const url1 = processInput_.argv[2];
const url2 = processInput_.argv[3];
const url3 = processInput_.argv[4];

export function jugglingAsync(firstURL: string, secondURL: string, thirdURL: string){
    let message_:string = "";
    http.get(firstURL, (response: any) => {
        response.setEncoding('utf-8');
        response.on('data', (data: string) => {
            message_ += data;
        });
    
        response.on('end', () => {
            console.log(message_);
            message_ = "";
            http.get(secondURL, (response: any) => {
                response.setEncoding('utf-8');
                response.on('data', (data: string) => {
                    message_ += data;
                });
                        
                response.on('end', () => {
                    console.log(message_);
                    message_ = "";
                    http.get(thirdURL, (response: any) => {
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
}

jugglingAsync(url1, url2, url3);

