const httpInput_ = require('http');
const url__ = require('url');
const processInput___ = require('process');


const server___ = httpInput_.createServer((req: any, res: any) => {
    let parsedURL = new URL(req.url, 'http://example.com');
    let date = new Date(String(parsedURL.searchParams.get('iso')));
    let time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }

    if (/^\/api\/parsetime/.test(req.url)) {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(time));
    } else if (/^\/api\/unixtime/.test(req.url)) {
        res.end(`{\"unixtime\":`+date.getTime().toString()+`}`);
    }
});

server___.listen(process.argv[2]);