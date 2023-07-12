const http = require('http');
const map = require ('through2-map');
const process = require('process');

const server = http.createServer((req, res) => {
    if(req.method == 'POST'){
        req.pipe(map((data) => {
            return data.toString().toUpperCase();
        })).pipe(res)
    }
});

server.listen(process.argv[2]);