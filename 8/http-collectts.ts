let httpInput = require('http');
let processInput = require('process');

let url = processInput.argv[2];

export function httpCollect(inputUrl: string){
    let message = "";
    let counter = 0;

    const request = httpInput.request(inputUrl, (response: any) => {
        response.setEncoding('utf-8');
        response.on('data', (data: string) => {
            message += data;
            counter+= data.length;
        });

        response.on('end', () => {
            console.log(counter);
            console.log(message);
        });
    });
}

httpCollect(url);

