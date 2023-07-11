let http = require('http');
let process = require('process');

let url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        console.log(data);
    })
});



