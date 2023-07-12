const http__In = require('http');
const map = require ('through2-map');
const process__In = require('process');

const server__ = http__In.createServer((req: any, res: any) => {
    if(req.method == 'POST'){
        req.pipe(map((data: string) => {
            return data.toString().toUpperCase();
        })).pipe(res)
    }
});

server__.listen(process__In.argv[2]);