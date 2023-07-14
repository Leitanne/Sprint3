const http_In = require('http');
const process_In = require('process');
const fs_In = require('fs');

let server_: any;
let port_ = process_In.argv[2];
let file_ = process.argv[3];

export function serverFile(file: string){
    const serverConst_ = http_In.createServer((req: any, res: any) => {
        let stream = fs_In.createReadStream(file);
        stream.pipe(res);
    });

    server_ = serverConst_
}

if (server_ instanceof http_In.Server){
    server_.listen(process_In.argv[2]);
}

