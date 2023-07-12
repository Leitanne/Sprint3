let httpInput = require('http');
let processInput = require('process');

let url = processInput.argv[2];

let message = "";
let counter = 0;

const request = httpInput.request(url, (response: any) => {
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

request.end();
