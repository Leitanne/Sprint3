const http = require('http');
const process = require('process');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    let stream = fs.createReadStream(process.argv[3]);
    stream.pipe(res);
});

server.listen(process.argv[2]);


