const http = require('http');
const url = require('url');
const process = require('process');


const server = http.createServer((req, res) => {
    console.log('inside server');
    let parsedURL = new URL(req.url, 'http://example.com');
    let date = new Date(parsedURL.searchParams.get('iso'));
    let time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }

    if (/^\/api\/parsetime/.test(req.url)) {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(time));
    } else if (/^\/api\/unixtime/.test(req.url)) {
        res.end(date.getTime());
    }
});

server.listen(process.argv[2]);