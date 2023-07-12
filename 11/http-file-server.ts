const http_In = require('http');
const process_In = require('process');
const fs_In = require('fs');

const server_ = http_In.createServer((req: any, res: any) => {
    let stream = fs_In.createReadStream(process.argv[3]);
    stream.pipe(res);
});

server_.listen(process_In.argv[2]);


