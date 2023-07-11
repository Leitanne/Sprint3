/*
Write a program that performs an HTTP GET request to a URL provided to you    
as the first command-line argument. Collect all data from the server (not     
just the first "data" event) and then write two lines to the console
(stdout).

The first line you write should just be an integer representing the number    
of characters received from the server. The second line should contain the    
complete String of characters sent by the server.
*/

let http = require('http');
let process = require('process');

let url = process.argv[2];

let message = "";
let counter = 0;

const request = http.request(url, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        message += data;
        counter+= data.length;
    });

    response.on('end', () => {
        console.log(counter);
        console.log(message);
    });
});

request.end();
